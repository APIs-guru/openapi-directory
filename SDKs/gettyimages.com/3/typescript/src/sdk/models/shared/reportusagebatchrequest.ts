import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetUsage } from "./assetusage";


// ReportUsageBatchRequest
/** 
 * Specifies the request information for the Batch Usages endpoint.
**/
export class ReportUsageBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_usages", elemType: shared.AssetUsage })
  assetUsages?: AssetUsage[];
}
