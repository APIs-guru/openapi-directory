package shared

type GrantOperationEnum string

const (
	GrantOperationEnumDecrypt                             GrantOperationEnum = "Decrypt"
	GrantOperationEnumEncrypt                             GrantOperationEnum = "Encrypt"
	GrantOperationEnumGenerateDataKey                     GrantOperationEnum = "GenerateDataKey"
	GrantOperationEnumGenerateDataKeyWithoutPlaintext     GrantOperationEnum = "GenerateDataKeyWithoutPlaintext"
	GrantOperationEnumReEncryptFrom                       GrantOperationEnum = "ReEncryptFrom"
	GrantOperationEnumReEncryptTo                         GrantOperationEnum = "ReEncryptTo"
	GrantOperationEnumSign                                GrantOperationEnum = "Sign"
	GrantOperationEnumVerify                              GrantOperationEnum = "Verify"
	GrantOperationEnumGetPublicKey                        GrantOperationEnum = "GetPublicKey"
	GrantOperationEnumCreateGrant                         GrantOperationEnum = "CreateGrant"
	GrantOperationEnumRetireGrant                         GrantOperationEnum = "RetireGrant"
	GrantOperationEnumDescribeKey                         GrantOperationEnum = "DescribeKey"
	GrantOperationEnumGenerateDataKeyPair                 GrantOperationEnum = "GenerateDataKeyPair"
	GrantOperationEnumGenerateDataKeyPairWithoutPlaintext GrantOperationEnum = "GenerateDataKeyPairWithoutPlaintext"
)
