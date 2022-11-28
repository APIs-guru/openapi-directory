import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutRecordInput
/** 
 * Represents the input for <code>PutRecord</code>.
**/
export class PutRecordInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=ExplicitHashKey" })
  explicitHashKey?: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionKey" })
  partitionKey: string;

  @SpeakeasyMetadata({ data: "json, name=SequenceNumberForOrdering" })
  sequenceNumberForOrdering?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}
