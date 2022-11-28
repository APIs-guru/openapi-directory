import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";



// ParallelismConfigurationUpdate
/** 
 * Describes updates to parameters for how an application executes multiple tasks simultaneously.
**/
export class ParallelismConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingEnabledUpdate" })
  autoScalingEnabledUpdate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ConfigurationTypeUpdate" })
  configurationTypeUpdate?: ConfigurationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ParallelismPerKPUUpdate" })
  parallelismPerKpuUpdate?: number;

  @SpeakeasyMetadata({ data: "json, name=ParallelismUpdate" })
  parallelismUpdate?: number;
}
