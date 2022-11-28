package shared

// OptionGroupOptionSetting
// Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.
type OptionGroupOptionSetting struct {
	AllowedValues                       *string
	ApplyType                           *string
	DefaultValue                        *string
	IsModifiable                        *bool
	IsRequired                          *bool
	MinimumEngineVersionPerAllowedValue []MinimumEngineVersionPerAllowedValue
	SettingDescription                  *string
	SettingName                         *string
}
