import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HardwareStatus
/** 
 * Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health.
**/
export class HardwareStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batteryTemperatures" })
  batteryTemperatures?: number[];

  @SpeakeasyMetadata({ data: "json, name=cpuTemperatures" })
  cpuTemperatures?: number[];

  @SpeakeasyMetadata({ data: "json, name=cpuUsages" })
  cpuUsages?: number[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fanSpeeds" })
  fanSpeeds?: number[];

  @SpeakeasyMetadata({ data: "json, name=gpuTemperatures" })
  gpuTemperatures?: number[];

  @SpeakeasyMetadata({ data: "json, name=skinTemperatures" })
  skinTemperatures?: number[];
}
