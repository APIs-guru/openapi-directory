import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationMaintenanceConfigurationUpdate
/** 
 * Describes the updated maintenance configuration for the application.
**/
export class ApplicationMaintenanceConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationMaintenanceWindowStartTimeUpdate" })
  applicationMaintenanceWindowStartTimeUpdate: string;
}
