import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RetireGrantRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GrantId" })
  grantId?: string;

  @Metadata({ data: "json, name=GrantToken" })
  grantToken?: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;
}
