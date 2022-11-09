import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationMaintenanceConfigurationUpdate } from "./applicationmaintenanceconfigurationupdate";


export class UpdateApplicationMaintenanceConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationMaintenanceConfigurationUpdate" })
  applicationMaintenanceConfigurationUpdate: ApplicationMaintenanceConfigurationUpdate;

  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;
}
