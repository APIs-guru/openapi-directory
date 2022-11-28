import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKeyTypeEnum } from "./encryptionkeytypeenum";



// EncryptionKey
/** 
 * The encryption key used to encrypt this object.
**/
export class EncryptionKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: EncryptionKeyTypeEnum;
}
