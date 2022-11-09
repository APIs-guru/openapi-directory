import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserSettings } from "./usersettings";


export class UpdateUserProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainId" })
  domainId: string;

  @Metadata({ data: "json, name=UserProfileName" })
  userProfileName: string;

  @Metadata({ data: "json, name=UserSettings" })
  userSettings?: UserSettings;
}
