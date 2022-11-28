import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the result of an individual record from a <code>PutRecords</code> request. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to the stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.
**/
export declare class PutRecordsResultEntry extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    sequenceNumber?: string;
    shardId?: string;
}
