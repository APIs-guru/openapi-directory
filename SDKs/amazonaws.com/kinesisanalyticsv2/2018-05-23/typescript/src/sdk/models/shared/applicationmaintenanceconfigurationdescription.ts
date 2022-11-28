import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationMaintenanceConfigurationDescription
/** 
 * The details of the maintenance configuration for the application.
**/
export class ApplicationMaintenanceConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationMaintenanceWindowEndTime" })
  applicationMaintenanceWindowEndTime: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationMaintenanceWindowStartTime" })
  applicationMaintenanceWindowStartTime: string;
}
