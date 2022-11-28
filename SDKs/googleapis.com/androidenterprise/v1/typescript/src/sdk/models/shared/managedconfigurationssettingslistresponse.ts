import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedConfigurationsSettings } from "./managedconfigurationssettings";



export class ManagedConfigurationsSettingsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=managedConfigurationsSettings", elemType: ManagedConfigurationsSettings })
  managedConfigurationsSettings?: ManagedConfigurationsSettings[];
}
