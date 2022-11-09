import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=GrantTokens" })
  grantTokens?: string[];

  @Metadata({ data: "json, name=KeyId" })
  keyId: string;
}
