import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnSpec } from "./columnspec";
import { TablesModelColumnInfo } from "./tablesmodelcolumninfo";
/**
 * Model metadata specific to AutoML Tables.
**/
export declare class TablesModelMetadata extends SpeakeasyBase {
    disableEarlyStopping?: boolean;
    inputFeatureColumnSpecs?: ColumnSpec[];
    optimizationObjective?: string;
    optimizationObjectivePrecisionValue?: number;
    optimizationObjectiveRecallValue?: number;
    tablesModelColumnInfo?: TablesModelColumnInfo[];
    targetColumnSpec?: ColumnSpec;
    trainBudgetMilliNodeHours?: string;
    trainCostMilliNodeHours?: string;
}
