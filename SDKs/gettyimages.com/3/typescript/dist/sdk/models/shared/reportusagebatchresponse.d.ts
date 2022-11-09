import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Specifies the response from the Batch Usages endpoint.
**/
export declare class ReportUsageBatchResponse extends SpeakeasyBase {
    invalidAssets?: string[];
    totalAssetUsagesProcessed?: number;
}
