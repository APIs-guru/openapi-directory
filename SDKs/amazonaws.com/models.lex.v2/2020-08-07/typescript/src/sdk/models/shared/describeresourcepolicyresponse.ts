import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeResourcePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
