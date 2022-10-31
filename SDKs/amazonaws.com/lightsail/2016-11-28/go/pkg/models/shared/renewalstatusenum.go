package shared

type RenewalStatusEnum string

const (
	RenewalStatusEnumPendingAutoRenewal RenewalStatusEnum = "PendingAutoRenewal"
	RenewalStatusEnumPendingValidation  RenewalStatusEnum = "PendingValidation"
	RenewalStatusEnumSuccess            RenewalStatusEnum = "Success"
	RenewalStatusEnumFailed             RenewalStatusEnum = "Failed"
)
