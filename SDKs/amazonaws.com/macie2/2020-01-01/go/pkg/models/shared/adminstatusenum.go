package shared

type AdminStatusEnum string

const (
	AdminStatusEnumEnabled             AdminStatusEnum = "ENABLED"
	AdminStatusEnumDisablingInProgress AdminStatusEnum = "DISABLING_IN_PROGRESS"
)
