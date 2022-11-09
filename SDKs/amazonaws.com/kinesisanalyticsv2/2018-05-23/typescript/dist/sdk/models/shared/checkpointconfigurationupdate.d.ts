import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";
/**
 * Describes updates to the checkpointing parameters for a Flink-based Kinesis Data Analytics application.
**/
export declare class CheckpointConfigurationUpdate extends SpeakeasyBase {
    checkpointIntervalUpdate?: number;
    checkpointingEnabledUpdate?: boolean;
    configurationTypeUpdate?: ConfigurationTypeEnum;
    minPauseBetweenCheckpointsUpdate?: number;
}
