import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataKeyPairSpecEnum } from "./datakeypairspecenum";



export class GenerateDataKeyPairResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyPairSpec" })
  keyPairSpec?: DataKeyPairSpecEnum;

  @SpeakeasyMetadata({ data: "json, name=PrivateKeyCiphertextBlob" })
  privateKeyCiphertextBlob?: string;

  @SpeakeasyMetadata({ data: "json, name=PrivateKeyPlaintext" })
  privateKeyPlaintext?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicKey" })
  publicKey?: string;
}
