import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy.
**/
export declare class HardwareInfo extends SpeakeasyBase {
    batteryShutdownTemperatures?: number[];
    batteryThrottlingTemperatures?: number[];
    brand?: string;
    cpuShutdownTemperatures?: number[];
    cpuThrottlingTemperatures?: number[];
    deviceBasebandVersion?: string;
    enterpriseSpecificId?: string;
    gpuShutdownTemperatures?: number[];
    gpuThrottlingTemperatures?: number[];
    hardware?: string;
    manufacturer?: string;
    model?: string;
    serialNumber?: string;
    skinShutdownTemperatures?: number[];
    skinThrottlingTemperatures?: number[];
}
