import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";


// ServerSideEncryption
/** 
 * Provides information about the server-side encryption settings for an S3 bucket or S3 object.
**/
export class ServerSideEncryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @Metadata({ data: "json, name=kmsMasterKeyId" })
  kmsMasterKeyId?: string;
}
