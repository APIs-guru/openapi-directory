import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutRecordsResultEntry
/** 
 * Represents the result of an individual record from a <code>PutRecords</code> request. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to the stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.
**/
export class PutRecordsResultEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=SequenceNumber" })
  sequenceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ShardId" })
  shardId?: string;
}
