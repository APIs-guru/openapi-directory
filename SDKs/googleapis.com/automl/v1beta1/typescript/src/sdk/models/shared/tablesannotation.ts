import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DoubleRange } from "./doublerange";
import { TablesModelColumnInfo } from "./tablesmodelcolumninfo";


// TablesAnnotation
/** 
 * Contains annotation details specific to Tables.
**/
export class TablesAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=baselineScore" })
  baselineScore?: number;

  @Metadata({ data: "json, name=predictionInterval" })
  predictionInterval?: DoubleRange;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=tablesModelColumnInfo", elemType: shared.TablesModelColumnInfo })
  tablesModelColumnInfo?: TablesModelColumnInfo[];

  @Metadata({ data: "json, name=value" })
  value?: any;
}
