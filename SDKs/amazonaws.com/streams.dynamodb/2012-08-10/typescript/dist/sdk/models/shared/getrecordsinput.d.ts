import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>GetRecords</code> operation.
**/
export declare class GetRecordsInput extends SpeakeasyBase {
    limit?: number;
    shardIterator: string;
}
