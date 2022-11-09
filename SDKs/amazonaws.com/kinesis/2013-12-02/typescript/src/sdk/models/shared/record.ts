import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";


// Record
/** 
 * The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob.
**/
export class Record extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApproximateArrivalTimestamp" })
  approximateArrivalTimestamp?: Date;

  @Metadata({ data: "json, name=Data" })
  data: string;

  @Metadata({ data: "json, name=EncryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @Metadata({ data: "json, name=PartitionKey" })
  partitionKey: string;

  @Metadata({ data: "json, name=SequenceNumber" })
  sequenceNumber: string;
}
