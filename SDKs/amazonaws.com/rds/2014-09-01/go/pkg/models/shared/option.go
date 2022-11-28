package shared

type Option struct {
	DbSecurityGroupMemberships  []DbSecurityGroupMembership
	OptionDescription           *string
	OptionName                  *string
	OptionSettings              []OptionSetting
	Permanent                   *bool
	Persistent                  *bool
	Port                        *int64
	VpcSecurityGroupMemberships []VpcSecurityGroupMembership
}
