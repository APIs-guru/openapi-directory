import { SpeakeasyBase } from "../../../internal/utils";
import { CorrelationStats } from "./correlationstats";
/**
 * Identifies the table's column, and its correlation with the column this ColumnSpec describes.
**/
export declare class CorrelatedColumn extends SpeakeasyBase {
    columnSpecId?: string;
    correlationStats?: CorrelationStats;
}
