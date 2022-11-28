import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssetUsage
/** 
 * Specifies the id, usage Quantity, and date of when an asset was used.
**/
export class AssetUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_id" })
  assetId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=usage_date" })
  usageDate?: Date;
}
