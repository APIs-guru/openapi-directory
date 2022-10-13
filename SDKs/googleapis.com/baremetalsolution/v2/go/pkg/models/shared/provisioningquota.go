package shared

type ProvisioningQuotaAssetTypeEnum string

const (
	ProvisioningQuotaAssetTypeEnumAssetTypeUnspecified ProvisioningQuotaAssetTypeEnum = "ASSET_TYPE_UNSPECIFIED"
	ProvisioningQuotaAssetTypeEnumAssetTypeServer      ProvisioningQuotaAssetTypeEnum = "ASSET_TYPE_SERVER"
	ProvisioningQuotaAssetTypeEnumAssetTypeStorage     ProvisioningQuotaAssetTypeEnum = "ASSET_TYPE_STORAGE"
	ProvisioningQuotaAssetTypeEnumAssetTypeNetwork     ProvisioningQuotaAssetTypeEnum = "ASSET_TYPE_NETWORK"
)

type ProvisioningQuota struct {
	AssetType        *ProvisioningQuotaAssetTypeEnum `json:"assetType"`
	AvailableCount   *int32                          `json:"availableCount"`
	GcpService       *string                         `json:"gcpService"`
	InstanceQuota    *InstanceQuota                  `json:"instanceQuota"`
	Location         *string                         `json:"location"`
	Name             *string                         `json:"name"`
	NetworkBandwidth *string                         `json:"networkBandwidth"`
	ServerCount      *string                         `json:"serverCount"`
	StorageGib       *string                         `json:"storageGib"`
}
