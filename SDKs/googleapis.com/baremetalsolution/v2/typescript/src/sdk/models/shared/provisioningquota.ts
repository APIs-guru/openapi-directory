import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceQuota } from "./instancequota";

export enum ProvisioningQuotaAssetTypeEnum {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED"
,    AssetTypeServer = "ASSET_TYPE_SERVER"
,    AssetTypeStorage = "ASSET_TYPE_STORAGE"
,    AssetTypeNetwork = "ASSET_TYPE_NETWORK"
}


// ProvisioningQuota
/** 
 * A provisioning quota for a given project.
**/
export class ProvisioningQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetType" })
  assetType?: ProvisioningQuotaAssetTypeEnum;

  @Metadata({ data: "json, name=availableCount" })
  availableCount?: number;

  @Metadata({ data: "json, name=gcpService" })
  gcpService?: string;

  @Metadata({ data: "json, name=instanceQuota" })
  instanceQuota?: InstanceQuota;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkBandwidth" })
  networkBandwidth?: string;

  @Metadata({ data: "json, name=serverCount" })
  serverCount?: string;

  @Metadata({ data: "json, name=storageGib" })
  storageGib?: string;
}
