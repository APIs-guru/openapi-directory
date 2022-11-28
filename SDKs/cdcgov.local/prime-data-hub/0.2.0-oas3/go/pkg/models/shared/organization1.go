package shared

// Organization1
// An organization connected to data hub
type Organization1 struct {
	CountyName   *string                      `json:"countyName,omitempty"`
	Description  string                       `json:"description"`
	Jurisdiction OrganizationJurisdictionEnum `json:"jurisdiction"`
	Name         string                       `json:"name"`
	StateCode    *string                      `json:"stateCode,omitempty"`
}
