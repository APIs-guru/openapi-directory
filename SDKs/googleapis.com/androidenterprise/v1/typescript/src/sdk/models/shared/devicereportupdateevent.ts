import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceReport } from "./devicereport";


// DeviceReportUpdateEvent
/** 
 * An event generated when an updated device report is available.
**/
export class DeviceReportUpdateEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=report" })
  report?: DeviceReport;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
