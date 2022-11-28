import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeResourcePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;
}
