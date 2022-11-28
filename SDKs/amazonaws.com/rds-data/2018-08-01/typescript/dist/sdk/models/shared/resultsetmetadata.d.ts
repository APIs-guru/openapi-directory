import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnMetadata } from "./columnmetadata";
/**
 * The metadata of the result set returned by a SQL statement.
**/
export declare class ResultSetMetadata extends SpeakeasyBase {
    columnCount?: number;
    columnMetadata?: ColumnMetadata[];
}
