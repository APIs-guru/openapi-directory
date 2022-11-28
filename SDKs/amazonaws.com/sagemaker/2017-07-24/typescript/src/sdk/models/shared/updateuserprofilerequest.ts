import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserSettings } from "./usersettings";



export class UpdateUserProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId: string;

  @SpeakeasyMetadata({ data: "json, name=UserProfileName" })
  userProfileName: string;

  @SpeakeasyMetadata({ data: "json, name=UserSettings" })
  userSettings?: UserSettings;
}
