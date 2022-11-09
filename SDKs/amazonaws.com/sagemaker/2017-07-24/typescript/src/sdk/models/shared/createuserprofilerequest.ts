import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { UserSettings } from "./usersettings";


export class CreateUserProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainId" })
  domainId: string;

  @Metadata({ data: "json, name=SingleSignOnUserIdentifier" })
  singleSignOnUserIdentifier?: string;

  @Metadata({ data: "json, name=SingleSignOnUserValue" })
  singleSignOnUserValue?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=UserProfileName" })
  userProfileName: string;

  @Metadata({ data: "json, name=UserSettings" })
  userSettings?: UserSettings;
}
