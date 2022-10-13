package shared

type EncryptionTypeEnum string

const (
	EncryptionTypeEnumNone EncryptionTypeEnum = "NONE"
	EncryptionTypeEnumKms  EncryptionTypeEnum = "KMS"
)
