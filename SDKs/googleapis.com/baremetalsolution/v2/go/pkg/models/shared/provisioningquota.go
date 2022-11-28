package shared

type ProvisioningQuotaAssetTypeEnum string

const (
	ProvisioningQuotaAssetTypeEnumAssetTypeUnspecified ProvisioningQuotaAssetTypeEnum = "ASSET_TYPE_UNSPECIFIED"
	ProvisioningQuotaAssetTypeEnumAssetTypeServer      ProvisioningQuotaAssetTypeEnum = "ASSET_TYPE_SERVER"
	ProvisioningQuotaAssetTypeEnumAssetTypeStorage     ProvisioningQuotaAssetTypeEnum = "ASSET_TYPE_STORAGE"
	ProvisioningQuotaAssetTypeEnumAssetTypeNetwork     ProvisioningQuotaAssetTypeEnum = "ASSET_TYPE_NETWORK"
)

// ProvisioningQuota
// A provisioning quota for a given project.
type ProvisioningQuota struct {
	AssetType        *ProvisioningQuotaAssetTypeEnum `json:"assetType,omitempty"`
	AvailableCount   *int32                          `json:"availableCount,omitempty"`
	GcpService       *string                         `json:"gcpService,omitempty"`
	InstanceQuota    *InstanceQuota                  `json:"instanceQuota,omitempty"`
	Location         *string                         `json:"location,omitempty"`
	Name             *string                         `json:"name,omitempty"`
	NetworkBandwidth *string                         `json:"networkBandwidth,omitempty"`
	ServerCount      *string                         `json:"serverCount,omitempty"`
	StorageGib       *string                         `json:"storageGib,omitempty"`
}
