import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PutRecordsRequestEntry
/** 
 * Represents the output for <code>PutRecords</code>.
**/
export class PutRecordsRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: string;

  @Metadata({ data: "json, name=ExplicitHashKey" })
  explicitHashKey?: string;

  @Metadata({ data: "json, name=PartitionKey" })
  partitionKey: string;
}
