package shared

type EncryptionTypeEnum string

const (
	EncryptionTypeEnumNone    EncryptionTypeEnum = "NONE"
	EncryptionTypeEnumAes256  EncryptionTypeEnum = "AES256"
	EncryptionTypeEnumAwsKms  EncryptionTypeEnum = "aws:kms"
	EncryptionTypeEnumUnknown EncryptionTypeEnum = "UNKNOWN"
)
