import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnMetadata } from "./columnmetadata";
import { Field } from "./field";
/**
 * The response elements represent the output of a request to run a SQL statement against a database.
**/
export declare class ExecuteStatementResponse extends SpeakeasyBase {
    columnMetadata?: ColumnMetadata[];
    generatedFields?: Field[];
    numberOfRecordsUpdated?: number;
    records?: Field[][];
}
