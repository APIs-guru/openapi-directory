import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationMaintenanceConfigurationUpdate } from "./applicationmaintenanceconfigurationupdate";



export class UpdateApplicationMaintenanceConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationMaintenanceConfigurationUpdate" })
  applicationMaintenanceConfigurationUpdate: ApplicationMaintenanceConfigurationUpdate;

  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;
}
