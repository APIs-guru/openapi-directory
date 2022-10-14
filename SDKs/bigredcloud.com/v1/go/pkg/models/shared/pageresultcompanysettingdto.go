package shared

type PageResultCompanySettingDto struct {
	Count        *int64              `json:"Count,omitempty"`
	Items        []CompanySettingDto `json:"Items,omitempty"`
	NextPageLink *string             `json:"NextPageLink,omitempty"`
}
