import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationMaintenanceConfigurationDescription
/** 
 * The details of the maintenance configuration for the application.
**/
export class ApplicationMaintenanceConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationMaintenanceWindowEndTime" })
  applicationMaintenanceWindowEndTime: string;

  @Metadata({ data: "json, name=ApplicationMaintenanceWindowStartTime" })
  applicationMaintenanceWindowStartTime: string;
}
