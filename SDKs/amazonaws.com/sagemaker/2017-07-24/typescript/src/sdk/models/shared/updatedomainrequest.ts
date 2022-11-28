import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserSettings } from "./usersettings";



export class UpdateDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultUserSettings" })
  defaultUserSettings?: UserSettings;

  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId: string;
}
