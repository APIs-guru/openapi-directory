import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResourcePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;
}
