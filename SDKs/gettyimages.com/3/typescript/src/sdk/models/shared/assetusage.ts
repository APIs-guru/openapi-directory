import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssetUsage
/** 
 * Specifies the id, usage Quantity, and date of when an asset was used.
**/
export class AssetUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_id" })
  assetId?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=usage_date" })
  usageDate?: Date;
}
