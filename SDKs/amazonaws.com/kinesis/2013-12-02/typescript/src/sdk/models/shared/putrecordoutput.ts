import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";


// PutRecordOutput
/** 
 * Represents the output for <code>PutRecord</code>.
**/
export class PutRecordOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @Metadata({ data: "json, name=SequenceNumber" })
  sequenceNumber: string;

  @Metadata({ data: "json, name=ShardId" })
  shardId: string;
}
