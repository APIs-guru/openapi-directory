import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordColumn } from "./recordcolumn";
import { RecordFormat } from "./recordformat";
/**
 * For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
**/
export declare class SourceSchema extends SpeakeasyBase {
    recordColumns: RecordColumn[];
    recordEncoding?: string;
    recordFormat: RecordFormat;
}
