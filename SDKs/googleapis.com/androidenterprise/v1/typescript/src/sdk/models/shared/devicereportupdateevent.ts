import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceReport } from "./devicereport";



// DeviceReportUpdateEvent
/** 
 * An event generated when an updated device report is available.
**/
export class DeviceReportUpdateEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report?: DeviceReport;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
