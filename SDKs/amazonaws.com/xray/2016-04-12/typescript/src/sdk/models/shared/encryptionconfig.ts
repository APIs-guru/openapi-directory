import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionStatusEnum } from "./encryptionstatusenum";
import { EncryptionTypeEnum } from "./encryptiontypeenum";



// EncryptionConfig
/** 
 * A configuration document that specifies encryption configuration settings.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EncryptionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: EncryptionTypeEnum;
}
