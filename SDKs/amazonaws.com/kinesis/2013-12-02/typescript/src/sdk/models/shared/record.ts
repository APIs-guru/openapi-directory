import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";



// Record
/** 
 * The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob.
**/
export class Record extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApproximateArrivalTimestamp" })
  approximateArrivalTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=EncryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=PartitionKey" })
  partitionKey: string;

  @SpeakeasyMetadata({ data: "json, name=SequenceNumber" })
  sequenceNumber: string;
}
