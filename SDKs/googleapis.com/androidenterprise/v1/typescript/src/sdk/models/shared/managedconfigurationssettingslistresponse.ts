import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ManagedConfigurationsSettings } from "./managedconfigurationssettings";


export class ManagedConfigurationsSettingsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=managedConfigurationsSettings", elemType: shared.ManagedConfigurationsSettings })
  managedConfigurationsSettings?: ManagedConfigurationsSettings[];
}
