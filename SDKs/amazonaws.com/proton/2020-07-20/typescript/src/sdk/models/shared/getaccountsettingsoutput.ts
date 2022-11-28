import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountSettings } from "./accountsettings";



export class GetAccountSettingsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountSettings" })
  accountSettings?: AccountSettings;
}
