import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";


// ParallelismConfiguration
/** 
 * Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.
**/
export class ParallelismConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoScalingEnabled" })
  autoScalingEnabled?: boolean;

  @Metadata({ data: "json, name=ConfigurationType" })
  configurationType: ConfigurationTypeEnum;

  @Metadata({ data: "json, name=Parallelism" })
  parallelism?: number;

  @Metadata({ data: "json, name=ParallelismPerKPU" })
  parallelismPerKpu?: number;
}
