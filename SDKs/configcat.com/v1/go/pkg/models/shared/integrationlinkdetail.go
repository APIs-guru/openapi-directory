package shared



type IntegrationLinkDetail struct {
    Config *ConfigModel `json:"config,omitempty"`
    Environment *EnvironmentModel `json:"environment,omitempty"`
    Product *ProductModel `json:"product,omitempty"`
    ReadOnly *bool `json:"readOnly,omitempty"`
    Setting *SettingDataModel `json:"setting,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

