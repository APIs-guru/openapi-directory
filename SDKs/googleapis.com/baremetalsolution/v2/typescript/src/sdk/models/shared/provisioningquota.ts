import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceQuota } from "./instancequota";


export enum ProvisioningQuotaAssetTypeEnum {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    AssetTypeServer = "ASSET_TYPE_SERVER",
    AssetTypeStorage = "ASSET_TYPE_STORAGE",
    AssetTypeNetwork = "ASSET_TYPE_NETWORK"
}


// ProvisioningQuota
/** 
 * A provisioning quota for a given project.
**/
export class ProvisioningQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetType" })
  assetType?: ProvisioningQuotaAssetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=availableCount" })
  availableCount?: number;

  @SpeakeasyMetadata({ data: "json, name=gcpService" })
  gcpService?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceQuota" })
  instanceQuota?: InstanceQuota;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkBandwidth" })
  networkBandwidth?: string;

  @SpeakeasyMetadata({ data: "json, name=serverCount" })
  serverCount?: string;

  @SpeakeasyMetadata({ data: "json, name=storageGib" })
  storageGib?: string;
}
