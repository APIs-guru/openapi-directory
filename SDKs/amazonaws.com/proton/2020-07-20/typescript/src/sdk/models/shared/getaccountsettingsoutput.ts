import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountSettings } from "./accountsettings";


export class GetAccountSettingsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountSettings" })
  accountSettings?: AccountSettings;
}
