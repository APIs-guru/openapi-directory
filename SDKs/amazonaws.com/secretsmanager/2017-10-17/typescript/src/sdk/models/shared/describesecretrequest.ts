import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;
}
