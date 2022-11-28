import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";



// ServerSideEncryption
/** 
 * Provides information about the server-side encryption settings for an S3 bucket or S3 object.
**/
export class ServerSideEncryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsMasterKeyId" })
  kmsMasterKeyId?: string;
}
