package shared

type BehaviorOnMxFailureEnum string

const (
	BehaviorOnMxFailureEnumUseDefaultValue BehaviorOnMxFailureEnum = "USE_DEFAULT_VALUE"
	BehaviorOnMxFailureEnumRejectMessage   BehaviorOnMxFailureEnum = "REJECT_MESSAGE"
)
