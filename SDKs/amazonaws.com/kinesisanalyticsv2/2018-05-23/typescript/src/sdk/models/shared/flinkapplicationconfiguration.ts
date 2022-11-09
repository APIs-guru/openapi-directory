import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CheckpointConfiguration } from "./checkpointconfiguration";
import { MonitoringConfiguration } from "./monitoringconfiguration";
import { ParallelismConfiguration } from "./parallelismconfiguration";


// FlinkApplicationConfiguration
/** 
 * Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook.
**/
export class FlinkApplicationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CheckpointConfiguration" })
  checkpointConfiguration?: CheckpointConfiguration;

  @Metadata({ data: "json, name=MonitoringConfiguration" })
  monitoringConfiguration?: MonitoringConfiguration;

  @Metadata({ data: "json, name=ParallelismConfiguration" })
  parallelismConfiguration?: ParallelismConfiguration;
}
