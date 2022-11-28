import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
/**
 * Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.
**/
export declare class ParallelismConfiguration extends SpeakeasyBase {
    autoScalingEnabled?: boolean;
    configurationType: ConfigurationTypeEnum;
    parallelism?: number;
    parallelismPerKpu?: number;
}
