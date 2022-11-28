import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";



// ParallelismConfigurationDescription
/** 
 * Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously.
**/
export class ParallelismConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingEnabled" })
  autoScalingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ConfigurationType" })
  configurationType?: ConfigurationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CurrentParallelism" })
  currentParallelism?: number;

  @SpeakeasyMetadata({ data: "json, name=Parallelism" })
  parallelism?: number;

  @SpeakeasyMetadata({ data: "json, name=ParallelismPerKPU" })
  parallelismPerKpu?: number;
}
