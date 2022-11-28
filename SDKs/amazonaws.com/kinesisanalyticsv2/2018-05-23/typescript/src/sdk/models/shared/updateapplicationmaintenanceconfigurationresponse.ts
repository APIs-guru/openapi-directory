import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationMaintenanceConfigurationDescription } from "./applicationmaintenanceconfigurationdescription";



export class UpdateApplicationMaintenanceConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationMaintenanceConfigurationDescription" })
  applicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;
}
