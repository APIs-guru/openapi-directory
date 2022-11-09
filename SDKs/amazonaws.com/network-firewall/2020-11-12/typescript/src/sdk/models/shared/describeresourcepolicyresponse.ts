import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeResourcePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy?: string;
}
