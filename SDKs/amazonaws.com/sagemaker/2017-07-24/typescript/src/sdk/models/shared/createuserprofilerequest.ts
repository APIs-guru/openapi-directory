import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { UserSettings } from "./usersettings";



export class CreateUserProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId: string;

  @SpeakeasyMetadata({ data: "json, name=SingleSignOnUserIdentifier" })
  singleSignOnUserIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=SingleSignOnUserValue" })
  singleSignOnUserValue?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UserProfileName" })
  userProfileName: string;

  @SpeakeasyMetadata({ data: "json, name=UserSettings" })
  userSettings?: UserSettings;
}
