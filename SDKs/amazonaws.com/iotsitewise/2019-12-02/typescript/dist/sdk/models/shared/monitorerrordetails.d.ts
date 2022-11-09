import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitorErrorCodeEnum } from "./monitorerrorcodeenum";
/**
 * Contains IoT SiteWise Monitor error details.
**/
export declare class MonitorErrorDetails extends SpeakeasyBase {
    code?: MonitorErrorCodeEnum;
    message?: string;
}
