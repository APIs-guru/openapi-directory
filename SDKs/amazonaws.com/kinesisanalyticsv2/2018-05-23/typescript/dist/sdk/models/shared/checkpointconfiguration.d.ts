import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
/**
 * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.
**/
export declare class CheckpointConfiguration extends SpeakeasyBase {
    checkpointInterval?: number;
    checkpointingEnabled?: boolean;
    configurationType: ConfigurationTypeEnum;
    minPauseBetweenCheckpoints?: number;
}
