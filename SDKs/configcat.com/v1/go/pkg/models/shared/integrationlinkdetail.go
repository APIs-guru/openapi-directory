package shared

type IntegrationLinkDetail struct {
	Config      *ConfigModel      `json:"config"`
	Environment *EnvironmentModel `json:"environment"`
	Product     *ProductModel     `json:"product"`
	ReadOnly    *bool             `json:"readOnly"`
	Setting     *SettingDataModel `json:"setting"`
	Status      *string           `json:"status"`
}
