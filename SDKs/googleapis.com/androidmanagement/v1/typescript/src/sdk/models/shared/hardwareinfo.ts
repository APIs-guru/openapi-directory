import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HardwareInfo
/** 
 * Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy.
**/
export class HardwareInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=batteryShutdownTemperatures" })
  batteryShutdownTemperatures?: number[];

  @Metadata({ data: "json, name=batteryThrottlingTemperatures" })
  batteryThrottlingTemperatures?: number[];

  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=cpuShutdownTemperatures" })
  cpuShutdownTemperatures?: number[];

  @Metadata({ data: "json, name=cpuThrottlingTemperatures" })
  cpuThrottlingTemperatures?: number[];

  @Metadata({ data: "json, name=deviceBasebandVersion" })
  deviceBasebandVersion?: string;

  @Metadata({ data: "json, name=enterpriseSpecificId" })
  enterpriseSpecificId?: string;

  @Metadata({ data: "json, name=gpuShutdownTemperatures" })
  gpuShutdownTemperatures?: number[];

  @Metadata({ data: "json, name=gpuThrottlingTemperatures" })
  gpuThrottlingTemperatures?: number[];

  @Metadata({ data: "json, name=hardware" })
  hardware?: string;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=skinShutdownTemperatures" })
  skinShutdownTemperatures?: number[];

  @Metadata({ data: "json, name=skinThrottlingTemperatures" })
  skinThrottlingTemperatures?: number[];
}
