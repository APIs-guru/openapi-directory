import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DoubleRange } from "./doublerange";
import { TablesModelColumnInfo } from "./tablesmodelcolumninfo";



// TablesAnnotation
/** 
 * Contains annotation details specific to Tables.
**/
export class TablesAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baselineScore" })
  baselineScore?: number;

  @SpeakeasyMetadata({ data: "json, name=predictionInterval" })
  predictionInterval?: DoubleRange;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=tablesModelColumnInfo", elemType: TablesModelColumnInfo })
  tablesModelColumnInfo?: TablesModelColumnInfo[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}
