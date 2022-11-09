import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";


// ParallelismConfigurationUpdate
/** 
 * Describes updates to parameters for how an application executes multiple tasks simultaneously.
**/
export class ParallelismConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingEnabledUpdate" })
  autoScalingEnabledUpdate?: boolean;

  @Metadata({ data: "json, name=ConfigurationTypeUpdate" })
  configurationTypeUpdate?: ConfigurationTypeEnum;

  @Metadata({ data: "json, name=ParallelismPerKPUUpdate" })
  parallelismPerKpuUpdate?: number;

  @Metadata({ data: "json, name=ParallelismUpdate" })
  parallelismUpdate?: number;
}
