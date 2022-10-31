package shared

import (
"time")

type KeyMetadata struct {
    AwsAccountID *string `json:"AWSAccountId,omitempty"`
    Arn *string `json:"Arn,omitempty"`
    CloudHsmClusterID *string `json:"CloudHsmClusterId,omitempty"`
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    CustomKeyStoreID *string `json:"CustomKeyStoreId,omitempty"`
    CustomerMasterKeySpec *CustomerMasterKeySpecEnum `json:"CustomerMasterKeySpec,omitempty"`
    DeletionDate *time.Time `json:"DeletionDate,omitempty"`
    Description *string `json:"Description,omitempty"`
    Enabled *bool `json:"Enabled,omitempty"`
    EncryptionAlgorithms []EncryptionAlgorithmSpecEnum `json:"EncryptionAlgorithms,omitempty"`
    ExpirationModel *ExpirationModelTypeEnum `json:"ExpirationModel,omitempty"`
    KeyID string `json:"KeyId"`
    KeyManager *KeyManagerTypeEnum `json:"KeyManager,omitempty"`
    KeySpec *KeySpecEnum `json:"KeySpec,omitempty"`
    KeyState *KeyStateEnum `json:"KeyState,omitempty"`
    KeyUsage *KeyUsageTypeEnum `json:"KeyUsage,omitempty"`
    MultiRegion *bool `json:"MultiRegion,omitempty"`
    MultiRegionConfiguration *MultiRegionConfiguration `json:"MultiRegionConfiguration,omitempty"`
    Origin *OriginTypeEnum `json:"Origin,omitempty"`
    PendingDeletionWindowInDays *int64 `json:"PendingDeletionWindowInDays,omitempty"`
    SigningAlgorithms []SigningAlgorithmSpecEnum `json:"SigningAlgorithms,omitempty"`
    ValidTo *time.Time `json:"ValidTo,omitempty"`
    
}

