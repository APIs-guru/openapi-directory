import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TablesModelColumnInfo
/** 
 * An information specific to given column and Tables Model, in context of the Model and the predictions created by it.
**/
export class TablesModelColumnInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnDisplayName" })
  columnDisplayName?: string;

  @Metadata({ data: "json, name=columnSpecName" })
  columnSpecName?: string;

  @Metadata({ data: "json, name=featureImportance" })
  featureImportance?: number;
}
