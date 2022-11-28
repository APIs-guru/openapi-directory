import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RevokeGrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GrantId" })
  grantId: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;
}
