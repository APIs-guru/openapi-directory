import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserSettings } from "./usersettings";


export class UpdateDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultUserSettings" })
  defaultUserSettings?: UserSettings;

  @Metadata({ data: "json, name=DomainId" })
  domainId: string;
}
