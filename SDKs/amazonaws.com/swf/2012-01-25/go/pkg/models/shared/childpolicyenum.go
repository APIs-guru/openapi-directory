package shared

type ChildPolicyEnum string

const (
	ChildPolicyEnumTerminate     ChildPolicyEnum = "TERMINATE"
	ChildPolicyEnumRequestCancel ChildPolicyEnum = "REQUEST_CANCEL"
	ChildPolicyEnumAbandon       ChildPolicyEnum = "ABANDON"
)
