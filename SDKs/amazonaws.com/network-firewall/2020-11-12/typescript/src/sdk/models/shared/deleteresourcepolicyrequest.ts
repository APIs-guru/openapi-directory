import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteResourcePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
