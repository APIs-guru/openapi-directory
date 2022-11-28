import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceReport } from "./devicereport";
/**
 * An event generated when an updated device report is available.
**/
export declare class DeviceReportUpdateEvent extends SpeakeasyBase {
    deviceId?: string;
    report?: DeviceReport;
    userId?: string;
}
