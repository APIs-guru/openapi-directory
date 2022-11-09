import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitorErrorDetails } from "./monitorerrordetails";
import { PortalStateEnum } from "./portalstateenum";
/**
 * Contains information about the current status of a portal.
**/
export declare class PortalStatus extends SpeakeasyBase {
    error?: MonitorErrorDetails;
    state: PortalStateEnum;
}
