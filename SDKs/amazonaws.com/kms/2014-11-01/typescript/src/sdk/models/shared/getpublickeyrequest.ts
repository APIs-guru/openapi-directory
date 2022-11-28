import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;
}
