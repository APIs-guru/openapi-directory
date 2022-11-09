import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldResult } from "./fieldresult";
import { TableResult } from "./tableresult";
/**
 * The result of extracting form field values
**/
export declare class FormRecognitionResult extends SpeakeasyBase {
    bestMatchFormSettingName?: string;
    diagnostics?: string[];
    fieldValueExtractionResult?: FieldResult[];
    successful?: boolean;
    tableValueExtractionResults?: TableResult[];
}
