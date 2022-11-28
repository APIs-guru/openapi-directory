package shared

type OptionGroupOption struct {
	DefaultPort                       *int64
	Description                       *string
	EngineName                        *string
	MajorEngineVersion                *string
	MinimumRequiredMinorEngineVersion *string
	Name                              *string
	OptionsDependedOn                 []string
	PortRequired                      *bool
}
