import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputConfig } from "./inputconfig";


// ImportDataRequest
/** 
 * Request message for AutoMl.ImportData.
**/
export class ImportDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: InputConfig;
}
