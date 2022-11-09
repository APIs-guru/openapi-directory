import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainId" })
  domainId: string;

  @Metadata({ data: "json, name=UserProfileName" })
  userProfileName: string;
}
