import { SpeakeasyBase } from "../../../internal/utils";
import { CheckpointConfigurationDescription } from "./checkpointconfigurationdescription";
import { MonitoringConfigurationDescription } from "./monitoringconfigurationdescription";
import { ParallelismConfigurationDescription } from "./parallelismconfigurationdescription";
/**
 * Describes configuration parameters for a Flink-based Kinesis Data Analytics application.
**/
export declare class FlinkApplicationConfigurationDescription extends SpeakeasyBase {
    checkpointConfigurationDescription?: CheckpointConfigurationDescription;
    jobPlanDescription?: string;
    monitoringConfigurationDescription?: MonitoringConfigurationDescription;
    parallelismConfigurationDescription?: ParallelismConfigurationDescription;
}
