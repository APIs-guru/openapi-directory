import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationMaintenanceConfigurationDescription } from "./applicationmaintenanceconfigurationdescription";


export class UpdateApplicationMaintenanceConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @Metadata({ data: "json, name=ApplicationMaintenanceConfigurationDescription" })
  applicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;
}
