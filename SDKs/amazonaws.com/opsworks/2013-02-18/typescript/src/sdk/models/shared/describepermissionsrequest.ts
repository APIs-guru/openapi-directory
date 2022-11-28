import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IamUserArn" })
  iamUserArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
