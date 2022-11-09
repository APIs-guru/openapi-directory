import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataKeyPairSpecEnum } from "./datakeypairspecenum";


export class GenerateDataKeyPairWithoutPlaintextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=KeyPairSpec" })
  keyPairSpec?: DataKeyPairSpecEnum;

  @Metadata({ data: "json, name=PrivateKeyCiphertextBlob" })
  privateKeyCiphertextBlob?: string;

  @Metadata({ data: "json, name=PublicKey" })
  publicKey?: string;
}
