import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PutRecordsResultEntry
/** 
 * Represents the result of an individual record from a <code>PutRecords</code> request. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to the stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.
**/
export class PutRecordsResultEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=SequenceNumber" })
  sequenceNumber?: string;

  @Metadata({ data: "json, name=ShardId" })
  shardId?: string;
}
