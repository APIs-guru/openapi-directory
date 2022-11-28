import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeUserProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId: string;

  @SpeakeasyMetadata({ data: "json, name=UserProfileName" })
  userProfileName: string;
}
