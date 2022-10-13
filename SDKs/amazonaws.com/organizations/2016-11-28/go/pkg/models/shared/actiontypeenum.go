package shared

type ActionTypeEnum string

const (
	ActionTypeEnumInvite                            ActionTypeEnum = "INVITE"
	ActionTypeEnumEnableAllFeatures                 ActionTypeEnum = "ENABLE_ALL_FEATURES"
	ActionTypeEnumApproveAllFeatures                ActionTypeEnum = "APPROVE_ALL_FEATURES"
	ActionTypeEnumAddOrganizationsServiceLinkedRole ActionTypeEnum = "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE"
)
