package shared

type OrganizationJurisdictionEnum string

const (
	OrganizationJurisdictionEnumNational OrganizationJurisdictionEnum = "National"
	OrganizationJurisdictionEnumState    OrganizationJurisdictionEnum = "State"
	OrganizationJurisdictionEnumCounty   OrganizationJurisdictionEnum = "County"
)

type Organization struct {
	CountyName   *string                      `json:"countyName"`
	Description  string                       `json:"description"`
	Jurisdiction OrganizationJurisdictionEnum `json:"jurisdiction"`
	Meta         *SettingMetadata             `json:"meta"`
	Name         string                       `json:"name"`
	StateCode    *string                      `json:"stateCode"`
}
