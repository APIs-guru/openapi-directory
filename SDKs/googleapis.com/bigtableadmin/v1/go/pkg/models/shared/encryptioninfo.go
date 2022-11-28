package shared

type EncryptionInfoEncryptionTypeEnum string

const (
	EncryptionInfoEncryptionTypeEnumEncryptionTypeUnspecified EncryptionInfoEncryptionTypeEnum = "ENCRYPTION_TYPE_UNSPECIFIED"
	EncryptionInfoEncryptionTypeEnumGoogleDefaultEncryption   EncryptionInfoEncryptionTypeEnum = "GOOGLE_DEFAULT_ENCRYPTION"
	EncryptionInfoEncryptionTypeEnumCustomerManagedEncryption EncryptionInfoEncryptionTypeEnum = "CUSTOMER_MANAGED_ENCRYPTION"
)

// EncryptionInfoInput
// Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
type EncryptionInfoInput struct {
	EncryptionStatus *Status `json:"encryptionStatus,omitempty"`
}

// EncryptionInfo
// Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
type EncryptionInfo struct {
	EncryptionStatus *Status                           `json:"encryptionStatus,omitempty"`
	EncryptionType   *EncryptionInfoEncryptionTypeEnum `json:"encryptionType,omitempty"`
	KmsKeyVersion    *string                           `json:"kmsKeyVersion,omitempty"`
}
