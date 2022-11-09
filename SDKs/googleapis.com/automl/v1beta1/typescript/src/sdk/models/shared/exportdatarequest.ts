import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OutputConfig } from "./outputconfig";


// ExportDataRequest
/** 
 * Request message for AutoMl.ExportData.
**/
export class ExportDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;
}
