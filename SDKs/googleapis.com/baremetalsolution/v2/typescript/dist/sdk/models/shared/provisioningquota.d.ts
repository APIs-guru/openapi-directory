import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceQuota } from "./instancequota";
export declare enum ProvisioningQuotaAssetTypeEnum {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    AssetTypeServer = "ASSET_TYPE_SERVER",
    AssetTypeStorage = "ASSET_TYPE_STORAGE",
    AssetTypeNetwork = "ASSET_TYPE_NETWORK"
}
/**
 * A provisioning quota for a given project.
**/
export declare class ProvisioningQuota extends SpeakeasyBase {
    assetType?: ProvisioningQuotaAssetTypeEnum;
    availableCount?: number;
    gcpService?: string;
    instanceQuota?: InstanceQuota;
    location?: string;
    name?: string;
    networkBandwidth?: string;
    serverCount?: string;
    storageGib?: string;
}
