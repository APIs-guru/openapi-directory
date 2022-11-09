import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataKeyPairSpecEnum } from "./datakeypairspecenum";


export class GenerateDataKeyPairRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionContext" })
  encryptionContext?: Map<string, string>;

  @Metadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=KeyPairSpec" })
  keyPairSpec: DataKeyPairSpecEnum;
}
