import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationMaintenanceConfigurationUpdate
/** 
 * Describes the updated maintenance configuration for the application.
**/
export class ApplicationMaintenanceConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationMaintenanceWindowStartTimeUpdate" })
  applicationMaintenanceWindowStartTimeUpdate: string;
}
