import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";


// ParallelismConfigurationDescription
/** 
 * Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously.
**/
export class ParallelismConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingEnabled" })
  autoScalingEnabled?: boolean;

  @Metadata({ data: "json, name=ConfigurationType" })
  configurationType?: ConfigurationTypeEnum;

  @Metadata({ data: "json, name=CurrentParallelism" })
  currentParallelism?: number;

  @Metadata({ data: "json, name=Parallelism" })
  parallelism?: number;

  @Metadata({ data: "json, name=ParallelismPerKPU" })
  parallelismPerKpu?: number;
}
