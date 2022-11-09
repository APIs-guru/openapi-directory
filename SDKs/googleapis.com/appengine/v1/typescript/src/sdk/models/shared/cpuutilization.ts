import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CpuUtilization
/** 
 * Target scaling by CPU usage.
**/
export class CpuUtilization extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationWindowLength" })
  aggregationWindowLength?: string;

  @Metadata({ data: "json, name=targetUtilization" })
  targetUtilization?: number;
}
