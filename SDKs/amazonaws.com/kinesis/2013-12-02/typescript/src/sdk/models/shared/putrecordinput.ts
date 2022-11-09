import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PutRecordInput
/** 
 * Represents the input for <code>PutRecord</code>.
**/
export class PutRecordInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: string;

  @Metadata({ data: "json, name=ExplicitHashKey" })
  explicitHashKey?: string;

  @Metadata({ data: "json, name=PartitionKey" })
  partitionKey: string;

  @Metadata({ data: "json, name=SequenceNumberForOrdering" })
  sequenceNumberForOrdering?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}
