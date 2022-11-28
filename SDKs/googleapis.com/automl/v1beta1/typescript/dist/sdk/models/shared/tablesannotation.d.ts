import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleRange } from "./doublerange";
import { TablesModelColumnInfo } from "./tablesmodelcolumninfo";
/**
 * Contains annotation details specific to Tables.
**/
export declare class TablesAnnotation extends SpeakeasyBase {
    baselineScore?: number;
    predictionInterval?: DoubleRange;
    score?: number;
    tablesModelColumnInfo?: TablesModelColumnInfo[];
    value?: any;
}
