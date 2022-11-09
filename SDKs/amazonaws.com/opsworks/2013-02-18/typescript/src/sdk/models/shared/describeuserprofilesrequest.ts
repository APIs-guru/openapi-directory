import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeUserProfilesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IamUserArns" })
  iamUserArns?: string[];
}
