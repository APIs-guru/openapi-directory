import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputConfig } from "./outputconfig";



// ExportDataRequest
/** 
 * Request message for AutoMl.ExportData.
**/
export class ExportDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;
}
