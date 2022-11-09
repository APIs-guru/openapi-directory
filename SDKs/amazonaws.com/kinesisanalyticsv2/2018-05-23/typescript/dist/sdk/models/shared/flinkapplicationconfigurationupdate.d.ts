import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CheckpointConfigurationUpdate } from "./checkpointconfigurationupdate";
import { MonitoringConfigurationUpdate } from "./monitoringconfigurationupdate";
import { ParallelismConfigurationUpdate } from "./parallelismconfigurationupdate";
/**
 * Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application.
**/
export declare class FlinkApplicationConfigurationUpdate extends SpeakeasyBase {
    checkpointConfigurationUpdate?: CheckpointConfigurationUpdate;
    monitoringConfigurationUpdate?: MonitoringConfigurationUpdate;
    parallelismConfigurationUpdate?: ParallelismConfigurationUpdate;
}
