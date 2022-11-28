import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelExportOutputConfig } from "./modelexportoutputconfig";



// ExportModelRequest
/** 
 * Request message for AutoMl.ExportModel. Models need to be enabled for exporting, otherwise an error code will be returned.
**/
export class ExportModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: ModelExportOutputConfig;
}
