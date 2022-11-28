import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateResult } from "./updateresult";
/**
 * The response elements represent the output of a SQL statement over an array of data.
**/
export declare class BatchExecuteStatementResponse extends SpeakeasyBase {
    updateResults?: UpdateResult[];
}
