import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeResourcePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
