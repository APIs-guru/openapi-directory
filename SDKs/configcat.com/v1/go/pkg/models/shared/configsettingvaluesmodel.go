package shared

type ConfigSettingValuesModel struct {
	Config        *ConfigModel              `json:"config,omitempty"`
	Environment   *EnvironmentModel         `json:"environment,omitempty"`
	ReadOnly      *bool                     `json:"readOnly,omitempty"`
	SettingValues []ConfigSettingValueModel `json:"settingValues,omitempty"`
}
