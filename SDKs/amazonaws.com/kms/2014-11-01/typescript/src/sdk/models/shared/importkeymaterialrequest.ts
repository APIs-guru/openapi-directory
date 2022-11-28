import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpirationModelTypeEnum } from "./expirationmodeltypeenum";



export class ImportKeyMaterialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptedKeyMaterial" })
  encryptedKeyMaterial: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationModel" })
  expirationModel?: ExpirationModelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ImportToken" })
  importToken: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=ValidTo" })
  validTo?: Date;
}
