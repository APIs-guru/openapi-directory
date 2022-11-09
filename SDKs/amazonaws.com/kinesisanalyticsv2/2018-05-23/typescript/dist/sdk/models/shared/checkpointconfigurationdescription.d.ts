import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
/**
 * Describes checkpointing parameters for a Flink-based Kinesis Data Analytics application.
**/
export declare class CheckpointConfigurationDescription extends SpeakeasyBase {
    checkpointInterval?: number;
    checkpointingEnabled?: boolean;
    configurationType?: ConfigurationTypeEnum;
    minPauseBetweenCheckpoints?: number;
}
