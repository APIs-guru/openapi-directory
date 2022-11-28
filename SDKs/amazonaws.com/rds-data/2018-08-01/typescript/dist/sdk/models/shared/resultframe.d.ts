import { SpeakeasyBase } from "../../../internal/utils";
import { Record } from "./record";
import { ResultSetMetadata } from "./resultsetmetadata";
/**
 * The result set returned by a SQL statement.
**/
export declare class ResultFrame extends SpeakeasyBase {
    records?: Record[];
    resultSetMetadata?: ResultSetMetadata;
}
