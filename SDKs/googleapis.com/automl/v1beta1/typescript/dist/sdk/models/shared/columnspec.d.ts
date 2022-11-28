import { SpeakeasyBase } from "../../../internal/utils";
import { DataStats } from "./datastats";
import { DataType } from "./datatype";
import { CorrelatedColumn } from "./correlatedcolumn";
/**
 * A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were given on import . Used by: * Tables
**/
export declare class ColumnSpec extends SpeakeasyBase {
    dataStats?: DataStats;
    dataType?: DataType;
    displayName?: string;
    etag?: string;
    name?: string;
    topCorrelatedColumns?: CorrelatedColumn[];
}
