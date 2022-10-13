package shared

import (
	"time"
)

type KeyMetadata struct {
	AwsAccountID                *string                       `json:"AWSAccountId"`
	Arn                         *string                       `json:"Arn"`
	CloudHsmClusterID           *string                       `json:"CloudHsmClusterId"`
	CreationDate                *time.Time                    `json:"CreationDate"`
	CustomKeyStoreID            *string                       `json:"CustomKeyStoreId"`
	CustomerMasterKeySpec       *CustomerMasterKeySpecEnum    `json:"CustomerMasterKeySpec"`
	DeletionDate                *time.Time                    `json:"DeletionDate"`
	Description                 *string                       `json:"Description"`
	Enabled                     *bool                         `json:"Enabled"`
	EncryptionAlgorithms        []EncryptionAlgorithmSpecEnum `json:"EncryptionAlgorithms"`
	ExpirationModel             *ExpirationModelTypeEnum      `json:"ExpirationModel"`
	KeyID                       string                        `json:"KeyId"`
	KeyManager                  *KeyManagerTypeEnum           `json:"KeyManager"`
	KeySpec                     *KeySpecEnum                  `json:"KeySpec"`
	KeyState                    *KeyStateEnum                 `json:"KeyState"`
	KeyUsage                    *KeyUsageTypeEnum             `json:"KeyUsage"`
	MultiRegion                 *bool                         `json:"MultiRegion"`
	MultiRegionConfiguration    *MultiRegionConfiguration     `json:"MultiRegionConfiguration"`
	Origin                      *OriginTypeEnum               `json:"Origin"`
	PendingDeletionWindowInDays *int64                        `json:"PendingDeletionWindowInDays"`
	SigningAlgorithms           []SigningAlgorithmSpecEnum    `json:"SigningAlgorithms"`
	ValidTo                     *time.Time                    `json:"ValidTo"`
}
