import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionKeyTypeEnum } from "./encryptionkeytypeenum";


// EncryptionKey
/** 
 * The encryption key used to encrypt this object.
**/
export class EncryptionKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Type" })
  type: EncryptionKeyTypeEnum;
}
