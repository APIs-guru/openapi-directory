package shared

type PageResultCompanySettingDto struct {
	Count        *int64              `json:"Count"`
	Items        []CompanySettingDto `json:"Items"`
	NextPageLink *string             `json:"NextPageLink"`
}
