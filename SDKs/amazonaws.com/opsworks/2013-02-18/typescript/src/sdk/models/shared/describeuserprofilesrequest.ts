import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeUserProfilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IamUserArns" })
  iamUserArns?: string[];
}
