import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";



// ParallelismConfiguration
/** 
 * Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.
**/
export class ParallelismConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoScalingEnabled" })
  autoScalingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ConfigurationType" })
  configurationType: ConfigurationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Parallelism" })
  parallelism?: number;

  @SpeakeasyMetadata({ data: "json, name=ParallelismPerKPU" })
  parallelismPerKpu?: number;
}
