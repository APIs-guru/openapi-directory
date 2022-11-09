import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeSecretRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecretId" })
  secretId: string;
}
