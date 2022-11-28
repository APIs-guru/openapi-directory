package shared

// OptionGroup
// <p/>
type OptionGroup struct {
	AllowsVpcAndNonVpcInstanceMemberships *bool
	EngineName                            *string
	MajorEngineVersion                    *string
	OptionGroupArn                        *string
	OptionGroupDescription                *string
	OptionGroupName                       *string
	Options                               []Option
	VpcID                                 *string
}
