import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputConfig } from "./inputconfig";



// ImportDataRequest
/** 
 * Request message for AutoMl.ImportData.
**/
export class ImportDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: InputConfig;
}
