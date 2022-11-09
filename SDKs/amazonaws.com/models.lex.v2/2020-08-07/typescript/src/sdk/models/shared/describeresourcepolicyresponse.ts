import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeResourcePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: string;

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
