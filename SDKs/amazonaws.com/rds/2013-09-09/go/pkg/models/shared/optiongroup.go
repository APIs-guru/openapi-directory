package shared

type OptionGroup struct {
	AllowsVpcAndNonVpcInstanceMemberships *bool
	EngineName                            *string
	MajorEngineVersion                    *string
	OptionGroupDescription                *string
	OptionGroupName                       *string
	Options                               []Option
	VpcID                                 *string
}
