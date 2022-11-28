import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeferredMaintenanceWindow
/** 
 * Describes a deferred maintenance window
**/
export class DeferredMaintenanceWindow extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deferMaintenanceEndTime?: Date;

  @SpeakeasyMetadata()
  deferMaintenanceIdentifier?: string;

  @SpeakeasyMetadata()
  deferMaintenanceStartTime?: Date;
}
