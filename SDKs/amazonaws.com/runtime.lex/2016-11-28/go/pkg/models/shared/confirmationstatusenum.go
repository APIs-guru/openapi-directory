package shared

type ConfirmationStatusEnum string

const (
	ConfirmationStatusEnumNone      ConfirmationStatusEnum = "None"
	ConfirmationStatusEnumConfirmed ConfirmationStatusEnum = "Confirmed"
	ConfirmationStatusEnumDenied    ConfirmationStatusEnum = "Denied"
)
