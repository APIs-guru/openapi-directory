import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetUsage } from "./assetusage";



// ReportUsageBatchRequest
/** 
 * Specifies the request information for the Batch Usages endpoint.
**/
export class ReportUsageBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_usages", elemType: AssetUsage })
  assetUsages?: AssetUsage[];
}
