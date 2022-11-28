import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health.
**/
export declare class HardwareStatus extends SpeakeasyBase {
    batteryTemperatures?: number[];
    cpuTemperatures?: number[];
    cpuUsages?: number[];
    createTime?: string;
    fanSpeeds?: number[];
    gpuTemperatures?: number[];
    skinTemperatures?: number[];
}
