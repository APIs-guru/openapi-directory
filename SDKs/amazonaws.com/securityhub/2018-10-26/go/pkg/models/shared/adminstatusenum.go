package shared

type AdminStatusEnum string

const (
	AdminStatusEnumEnabled           AdminStatusEnum = "ENABLED"
	AdminStatusEnumDisableInProgress AdminStatusEnum = "DISABLE_IN_PROGRESS"
)
