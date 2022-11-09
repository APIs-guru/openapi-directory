import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordColumn } from "./recordcolumn";
import { RecordFormat } from "./recordformat";
/**
 * Describes updates for the application's input schema.
**/
export declare class InputSchemaUpdate extends SpeakeasyBase {
    recordColumnUpdates?: RecordColumn[];
    recordEncodingUpdate?: string;
    recordFormatUpdate?: RecordFormat;
}
