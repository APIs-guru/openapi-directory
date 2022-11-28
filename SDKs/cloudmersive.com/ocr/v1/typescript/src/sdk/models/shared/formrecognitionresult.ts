import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldResult } from "./fieldresult";
import { TableResult } from "./tableresult";



// FormRecognitionResult
/** 
 * The result of extracting form field values
**/
export class FormRecognitionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BestMatchFormSettingName" })
  bestMatchFormSettingName?: string;

  @SpeakeasyMetadata({ data: "json, name=Diagnostics" })
  diagnostics?: string[];

  @SpeakeasyMetadata({ data: "json, name=FieldValueExtractionResult", elemType: FieldResult })
  fieldValueExtractionResult?: FieldResult[];

  @SpeakeasyMetadata({ data: "json, name=Successful" })
  successful?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TableValueExtractionResults", elemType: TableResult })
  tableValueExtractionResults?: TableResult[];
}
