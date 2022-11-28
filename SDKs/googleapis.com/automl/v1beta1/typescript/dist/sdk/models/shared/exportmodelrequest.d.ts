import { SpeakeasyBase } from "../../../internal/utils";
import { ModelExportOutputConfig } from "./modelexportoutputconfig";
/**
 * Request message for AutoMl.ExportModel. Models need to be enabled for exporting, otherwise an error code will be returned.
**/
export declare class ExportModelRequest extends SpeakeasyBase {
    outputConfig?: ModelExportOutputConfig;
}
