import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitorErrorDetails } from "./monitorerrordetails";
import { PortalStateEnum } from "./portalstateenum";



// PortalStatus
/** 
 * Contains information about the current status of a portal.
**/
export class PortalStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: MonitorErrorDetails;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: PortalStateEnum;
}
