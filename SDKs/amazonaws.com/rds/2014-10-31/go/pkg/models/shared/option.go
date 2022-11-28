package shared

// Option
// Option details.
type Option struct {
	DbSecurityGroupMemberships  []DbSecurityGroupMembership
	OptionDescription           *string
	OptionName                  *string
	OptionSettings              []OptionSetting
	OptionVersion               *string
	Permanent                   *bool
	Persistent                  *bool
	Port                        *int64
	VpcSecurityGroupMemberships []VpcSecurityGroupMembership
}
