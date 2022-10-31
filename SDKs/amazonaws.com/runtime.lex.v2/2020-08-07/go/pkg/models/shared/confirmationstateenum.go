package shared

type ConfirmationStateEnum string

const (
	ConfirmationStateEnumConfirmed ConfirmationStateEnum = "Confirmed"
	ConfirmationStateEnumDenied    ConfirmationStateEnum = "Denied"
	ConfirmationStateEnumNone      ConfirmationStateEnum = "None"
)
