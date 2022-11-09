import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataKeySpecEnum } from "./datakeyspecenum";


export class GenerateDataKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionContext" })
  encryptionContext?: Map<string, string>;

  @Metadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=KeySpec" })
  keySpec?: DataKeySpecEnum;

  @Metadata({ data: "json, name=NumberOfBytes" })
  numberOfBytes?: number;
}
