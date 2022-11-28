import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataKeyPairSpecEnum } from "./datakeypairspecenum";



export class GenerateDataKeyPairWithoutPlaintextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionContext" })
  encryptionContext?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=KeyPairSpec" })
  keyPairSpec: DataKeyPairSpecEnum;
}
