import { SpeakeasyBase } from "../../../internal/utils";
import { RecordColumn } from "./recordcolumn";
import { RecordFormat } from "./recordformat";
/**
 * Describes updates for an SQL-based Kinesis Data Analytics application's input schema.
**/
export declare class InputSchemaUpdate extends SpeakeasyBase {
    recordColumnUpdates?: RecordColumn[];
    recordEncodingUpdate?: string;
    recordFormatUpdate?: RecordFormat;
}
