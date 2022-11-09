import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelExportOutputConfig } from "./modelexportoutputconfig";


// ExportModelRequest
/** 
 * Request message for AutoMl.ExportModel. Models need to be enabled for exporting, otherwise an error code will be returned.
**/
export class ExportModelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: ModelExportOutputConfig;
}
