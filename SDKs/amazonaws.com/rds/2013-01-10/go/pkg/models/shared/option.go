package shared

type Option struct {
	DbSecurityGroupMemberships  []DbSecurityGroupMembership
	OptionDescription           *string
	OptionName                  *string
	Port                        *int64
	VpcSecurityGroupMemberships []VpcSecurityGroupMembership
}
