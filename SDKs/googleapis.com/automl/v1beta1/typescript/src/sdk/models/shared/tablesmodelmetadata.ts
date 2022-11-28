import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnSpec } from "./columnspec";
import { TablesModelColumnInfo } from "./tablesmodelcolumninfo";



// TablesModelMetadata
/** 
 * Model metadata specific to AutoML Tables.
**/
export class TablesModelMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableEarlyStopping" })
  disableEarlyStopping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inputFeatureColumnSpecs", elemType: ColumnSpec })
  inputFeatureColumnSpecs?: ColumnSpec[];

  @SpeakeasyMetadata({ data: "json, name=optimizationObjective" })
  optimizationObjective?: string;

  @SpeakeasyMetadata({ data: "json, name=optimizationObjectivePrecisionValue" })
  optimizationObjectivePrecisionValue?: number;

  @SpeakeasyMetadata({ data: "json, name=optimizationObjectiveRecallValue" })
  optimizationObjectiveRecallValue?: number;

  @SpeakeasyMetadata({ data: "json, name=tablesModelColumnInfo", elemType: TablesModelColumnInfo })
  tablesModelColumnInfo?: TablesModelColumnInfo[];

  @SpeakeasyMetadata({ data: "json, name=targetColumnSpec" })
  targetColumnSpec?: ColumnSpec;

  @SpeakeasyMetadata({ data: "json, name=trainBudgetMilliNodeHours" })
  trainBudgetMilliNodeHours?: string;

  @SpeakeasyMetadata({ data: "json, name=trainCostMilliNodeHours" })
  trainCostMilliNodeHours?: string;
}
