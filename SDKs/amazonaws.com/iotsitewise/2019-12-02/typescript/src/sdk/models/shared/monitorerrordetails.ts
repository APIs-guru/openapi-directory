import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitorErrorCodeEnum } from "./monitorerrorcodeenum";


// MonitorErrorDetails
/** 
 * Contains IoT SiteWise Monitor error details.
**/
export class MonitorErrorDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: MonitorErrorCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
