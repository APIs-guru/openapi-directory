import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataKeySpecEnum } from "./datakeyspecenum";



export class GenerateDataKeyWithoutPlaintextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionContext" })
  encryptionContext?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=KeySpec" })
  keySpec?: DataKeySpecEnum;

  @SpeakeasyMetadata({ data: "json, name=NumberOfBytes" })
  numberOfBytes?: number;
}
