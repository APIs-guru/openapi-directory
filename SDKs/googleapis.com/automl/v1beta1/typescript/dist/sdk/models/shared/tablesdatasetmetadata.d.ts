import { SpeakeasyBase } from "../../../internal/utils";
import { CorrelationStats } from "./correlationstats";
/**
 * Metadata for a dataset used for AutoML Tables.
**/
export declare class TablesDatasetMetadata extends SpeakeasyBase {
    mlUseColumnSpecId?: string;
    primaryTableSpecId?: string;
    statsUpdateTime?: string;
    targetColumnCorrelations?: Map<string, CorrelationStats>;
    targetColumnSpecId?: string;
    weightColumnSpecId?: string;
}
