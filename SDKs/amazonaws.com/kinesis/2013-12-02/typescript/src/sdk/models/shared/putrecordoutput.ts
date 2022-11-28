import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";



// PutRecordOutput
/** 
 * Represents the output for <code>PutRecord</code>.
**/
export class PutRecordOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SequenceNumber" })
  sequenceNumber: string;

  @SpeakeasyMetadata({ data: "json, name=ShardId" })
  shardId: string;
}
