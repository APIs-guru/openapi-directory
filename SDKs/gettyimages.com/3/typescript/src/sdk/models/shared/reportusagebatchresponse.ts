import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportUsageBatchResponse
/** 
 * Specifies the response from the Batch Usages endpoint.
**/
export class ReportUsageBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invalid_assets" })
  invalidAssets?: string[];

  @SpeakeasyMetadata({ data: "json, name=total_asset_usages_processed" })
  totalAssetUsagesProcessed?: number;
}
