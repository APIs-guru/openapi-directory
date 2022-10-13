package shared

type TypeEnum string

const (
	TypeEnumNone   TypeEnum = "NONE"
	TypeEnumAes256 TypeEnum = "AES256"
	TypeEnumAwsKms TypeEnum = "aws:kms"
)
