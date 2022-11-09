import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionStatusEnum } from "./encryptionstatusenum";
import { EncryptionTypeEnum } from "./encryptiontypeenum";


// EncryptionConfig
/** 
 * A configuration document that specifies encryption configuration settings.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: EncryptionStatusEnum;

  @Metadata({ data: "json, name=Type" })
  type?: EncryptionTypeEnum;
}
