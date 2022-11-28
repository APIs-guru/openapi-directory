package shared

// OptionGroupOption
// Available option.
type OptionGroupOption struct {
	DefaultPort                           *int64
	Description                           *string
	EngineName                            *string
	MajorEngineVersion                    *string
	MinimumRequiredMinorEngineVersion     *string
	Name                                  *string
	OptionGroupOptionSettings             []OptionGroupOptionSetting
	OptionGroupOptionVersions             []OptionVersion
	OptionsConflictsWith                  []string
	OptionsDependedOn                     []string
	Permanent                             *bool
	Persistent                            *bool
	PortRequired                          *bool
	RequiresAutoMinorEngineVersionUpgrade *bool
	SupportsOptionVersionDowngrade        *bool
	VpcOnly                               *bool
}
