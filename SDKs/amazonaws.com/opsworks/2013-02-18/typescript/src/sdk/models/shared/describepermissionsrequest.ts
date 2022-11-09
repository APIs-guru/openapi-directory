import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IamUserArn" })
  iamUserArn?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
