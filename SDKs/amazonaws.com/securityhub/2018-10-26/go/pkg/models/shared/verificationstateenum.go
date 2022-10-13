package shared

type VerificationStateEnum string

const (
	VerificationStateEnumUnknown        VerificationStateEnum = "UNKNOWN"
	VerificationStateEnumTruePositive   VerificationStateEnum = "TRUE_POSITIVE"
	VerificationStateEnumFalsePositive  VerificationStateEnum = "FALSE_POSITIVE"
	VerificationStateEnumBenignPositive VerificationStateEnum = "BENIGN_POSITIVE"
)
