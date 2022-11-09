import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HardwareStatus
/** 
 * Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health.
**/
export class HardwareStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=batteryTemperatures" })
  batteryTemperatures?: number[];

  @Metadata({ data: "json, name=cpuTemperatures" })
  cpuTemperatures?: number[];

  @Metadata({ data: "json, name=cpuUsages" })
  cpuUsages?: number[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=fanSpeeds" })
  fanSpeeds?: number[];

  @Metadata({ data: "json, name=gpuTemperatures" })
  gpuTemperatures?: number[];

  @Metadata({ data: "json, name=skinTemperatures" })
  skinTemperatures?: number[];
}
