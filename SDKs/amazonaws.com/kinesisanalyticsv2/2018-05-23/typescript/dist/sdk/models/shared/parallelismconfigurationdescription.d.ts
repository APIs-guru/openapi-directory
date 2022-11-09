import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
/**
 * Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously.
**/
export declare class ParallelismConfigurationDescription extends SpeakeasyBase {
    autoScalingEnabled?: boolean;
    configurationType?: ConfigurationTypeEnum;
    currentParallelism?: number;
    parallelism?: number;
    parallelismPerKpu?: number;
}
