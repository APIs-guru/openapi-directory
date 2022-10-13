package shared

type ConfigSettingValuesModel struct {
	Config        *ConfigModel              `json:"config"`
	Environment   *EnvironmentModel         `json:"environment"`
	ReadOnly      *bool                     `json:"readOnly"`
	SettingValues []ConfigSettingValueModel `json:"settingValues"`
}
