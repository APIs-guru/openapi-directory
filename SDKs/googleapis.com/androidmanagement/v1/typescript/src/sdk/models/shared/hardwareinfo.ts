import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HardwareInfo
/** 
 * Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy.
**/
export class HardwareInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batteryShutdownTemperatures" })
  batteryShutdownTemperatures?: number[];

  @SpeakeasyMetadata({ data: "json, name=batteryThrottlingTemperatures" })
  batteryThrottlingTemperatures?: number[];

  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=cpuShutdownTemperatures" })
  cpuShutdownTemperatures?: number[];

  @SpeakeasyMetadata({ data: "json, name=cpuThrottlingTemperatures" })
  cpuThrottlingTemperatures?: number[];

  @SpeakeasyMetadata({ data: "json, name=deviceBasebandVersion" })
  deviceBasebandVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=enterpriseSpecificId" })
  enterpriseSpecificId?: string;

  @SpeakeasyMetadata({ data: "json, name=gpuShutdownTemperatures" })
  gpuShutdownTemperatures?: number[];

  @SpeakeasyMetadata({ data: "json, name=gpuThrottlingTemperatures" })
  gpuThrottlingTemperatures?: number[];

  @SpeakeasyMetadata({ data: "json, name=hardware" })
  hardware?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=skinShutdownTemperatures" })
  skinShutdownTemperatures?: number[];

  @SpeakeasyMetadata({ data: "json, name=skinThrottlingTemperatures" })
  skinThrottlingTemperatures?: number[];
}
