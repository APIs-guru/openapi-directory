import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TablesModelColumnInfo
/** 
 * An information specific to given column and Tables Model, in context of the Model and the predictions created by it.
**/
export class TablesModelColumnInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnDisplayName" })
  columnDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=columnSpecName" })
  columnSpecName?: string;

  @SpeakeasyMetadata({ data: "json, name=featureImportance" })
  featureImportance?: number;
}
