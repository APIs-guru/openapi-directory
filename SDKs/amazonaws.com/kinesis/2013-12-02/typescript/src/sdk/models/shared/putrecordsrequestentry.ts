import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutRecordsRequestEntry
/** 
 * Represents the output for <code>PutRecords</code>.
**/
export class PutRecordsRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=ExplicitHashKey" })
  explicitHashKey?: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionKey" })
  partitionKey: string;
}
