package shared

type DialogActionTypeEnum string

const (
	DialogActionTypeEnumElicitIntent  DialogActionTypeEnum = "ElicitIntent"
	DialogActionTypeEnumConfirmIntent DialogActionTypeEnum = "ConfirmIntent"
	DialogActionTypeEnumElicitSlot    DialogActionTypeEnum = "ElicitSlot"
	DialogActionTypeEnumClose         DialogActionTypeEnum = "Close"
	DialogActionTypeEnumDelegate      DialogActionTypeEnum = "Delegate"
)
