import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportUsageBatchResponse
/** 
 * Specifies the response from the Batch Usages endpoint.
**/
export class ReportUsageBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=invalid_assets" })
  invalidAssets?: string[];

  @Metadata({ data: "json, name=total_asset_usages_processed" })
  totalAssetUsagesProcessed?: number;
}
