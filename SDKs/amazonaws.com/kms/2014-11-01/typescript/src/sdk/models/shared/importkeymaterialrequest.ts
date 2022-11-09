import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExpirationModelTypeEnum } from "./expirationmodeltypeenum";


export class ImportKeyMaterialRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptedKeyMaterial" })
  encryptedKeyMaterial: string;

  @Metadata({ data: "json, name=ExpirationModel" })
  expirationModel?: ExpirationModelTypeEnum;

  @Metadata({ data: "json, name=ImportToken" })
  importToken: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=ValidTo" })
  validTo?: Date;
}
