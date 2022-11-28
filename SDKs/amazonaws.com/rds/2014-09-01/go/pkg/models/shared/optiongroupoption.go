package shared

type OptionGroupOption struct {
	DefaultPort                       *int64
	Description                       *string
	EngineName                        *string
	MajorEngineVersion                *string
	MinimumRequiredMinorEngineVersion *string
	Name                              *string
	OptionGroupOptionSettings         []OptionGroupOptionSetting
	OptionsDependedOn                 []string
	Permanent                         *bool
	Persistent                        *bool
	PortRequired                      *bool
}
