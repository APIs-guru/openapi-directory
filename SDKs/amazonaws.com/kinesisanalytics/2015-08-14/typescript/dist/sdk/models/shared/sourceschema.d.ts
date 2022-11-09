import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordColumn } from "./recordcolumn";
import { RecordFormat } from "./recordformat";
/**
 * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
**/
export declare class SourceSchema extends SpeakeasyBase {
    recordColumns: RecordColumn[];
    recordEncoding?: string;
    recordFormat: RecordFormat;
}
