import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitorErrorCodeEnum } from "./monitorerrorcodeenum";



// MonitorErrorDetails
/** 
 * Contains IoT SiteWise Monitor error details.
**/
export class MonitorErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: MonitorErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
