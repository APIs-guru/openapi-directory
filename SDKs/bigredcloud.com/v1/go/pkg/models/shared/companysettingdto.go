package shared

type CompanySettingDto struct {
	EnableVocrReporting *bool   `json:"enableVOCRReporting"`
	ID                  *int64  `json:"id"`
	UseAllocations      *bool   `json:"useAllocations"`
	Value               *string `json:"value"`
	VocrSettingValue    *bool   `json:"vocrSettingValue"`
}
