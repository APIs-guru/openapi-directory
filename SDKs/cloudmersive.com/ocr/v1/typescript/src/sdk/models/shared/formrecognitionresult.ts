import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FieldResult } from "./fieldresult";
import { TableResult } from "./tableresult";


// FormRecognitionResult
/** 
 * The result of extracting form field values
**/
export class FormRecognitionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=BestMatchFormSettingName" })
  bestMatchFormSettingName?: string;

  @Metadata({ data: "json, name=Diagnostics" })
  diagnostics?: string[];

  @Metadata({ data: "json, name=FieldValueExtractionResult", elemType: shared.FieldResult })
  fieldValueExtractionResult?: FieldResult[];

  @Metadata({ data: "json, name=Successful" })
  successful?: boolean;

  @Metadata({ data: "json, name=TableValueExtractionResults", elemType: shared.TableResult })
  tableValueExtractionResults?: TableResult[];
}
