import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColumnSpec } from "./columnspec";
import { TablesModelColumnInfo } from "./tablesmodelcolumninfo";
import { ColumnSpec } from "./columnspec";


// TablesModelMetadata
/** 
 * Model metadata specific to AutoML Tables.
**/
export class TablesModelMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableEarlyStopping" })
  disableEarlyStopping?: boolean;

  @Metadata({ data: "json, name=inputFeatureColumnSpecs", elemType: shared.ColumnSpec })
  inputFeatureColumnSpecs?: ColumnSpec[];

  @Metadata({ data: "json, name=optimizationObjective" })
  optimizationObjective?: string;

  @Metadata({ data: "json, name=optimizationObjectivePrecisionValue" })
  optimizationObjectivePrecisionValue?: number;

  @Metadata({ data: "json, name=optimizationObjectiveRecallValue" })
  optimizationObjectiveRecallValue?: number;

  @Metadata({ data: "json, name=tablesModelColumnInfo", elemType: shared.TablesModelColumnInfo })
  tablesModelColumnInfo?: TablesModelColumnInfo[];

  @Metadata({ data: "json, name=targetColumnSpec" })
  targetColumnSpec?: ColumnSpec;

  @Metadata({ data: "json, name=trainBudgetMilliNodeHours" })
  trainBudgetMilliNodeHours?: string;

  @Metadata({ data: "json, name=trainCostMilliNodeHours" })
  trainCostMilliNodeHours?: string;
}
