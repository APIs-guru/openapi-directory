import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitorErrorDetails } from "./monitorerrordetails";
import { PortalStateEnum } from "./portalstateenum";


// PortalStatus
/** 
 * Contains information about the current status of a portal.
**/
export class PortalStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: MonitorErrorDetails;

  @Metadata({ data: "json, name=state" })
  state: PortalStateEnum;
}
