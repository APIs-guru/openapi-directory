package shared

type NsfwPolicyEnum string

const (
	NsfwPolicyEnumDisplay   NsfwPolicyEnum = "display"
	NsfwPolicyEnumBlur      NsfwPolicyEnum = "blur"
	NsfwPolicyEnumDoNotList NsfwPolicyEnum = "do_not_list"
)
