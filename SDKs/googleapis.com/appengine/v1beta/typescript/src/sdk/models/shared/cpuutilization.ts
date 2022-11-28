import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CpuUtilization
/** 
 * Target scaling by CPU usage.
**/
export class CpuUtilization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationWindowLength" })
  aggregationWindowLength?: string;

  @SpeakeasyMetadata({ data: "json, name=targetUtilization" })
  targetUtilization?: number;
}
