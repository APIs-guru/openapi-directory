import { SpeakeasyBase } from "../../../internal/utils";
import { AssetUsage } from "./assetusage";
/**
 * Specifies the request information for the Batch Usages endpoint.
**/
export declare class ReportUsageBatchRequest extends SpeakeasyBase {
    assetUsages?: AssetUsage[];
}
