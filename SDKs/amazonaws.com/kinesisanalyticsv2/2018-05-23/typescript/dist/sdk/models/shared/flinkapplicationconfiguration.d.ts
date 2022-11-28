import { SpeakeasyBase } from "../../../internal/utils";
import { CheckpointConfiguration } from "./checkpointconfiguration";
import { MonitoringConfiguration } from "./monitoringconfiguration";
import { ParallelismConfiguration } from "./parallelismconfiguration";
/**
 * Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook.
**/
export declare class FlinkApplicationConfiguration extends SpeakeasyBase {
    checkpointConfiguration?: CheckpointConfiguration;
    monitoringConfiguration?: MonitoringConfiguration;
    parallelismConfiguration?: ParallelismConfiguration;
}
