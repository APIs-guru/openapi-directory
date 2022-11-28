import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId: string;

  @SpeakeasyMetadata({ data: "json, name=UserProfileName" })
  userProfileName: string;
}
