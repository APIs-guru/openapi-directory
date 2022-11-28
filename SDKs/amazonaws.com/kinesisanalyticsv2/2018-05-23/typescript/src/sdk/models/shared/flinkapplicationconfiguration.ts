import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CheckpointConfiguration } from "./checkpointconfiguration";
import { MonitoringConfiguration } from "./monitoringconfiguration";
import { ParallelismConfiguration } from "./parallelismconfiguration";



// FlinkApplicationConfiguration
/** 
 * Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook.
**/
export class FlinkApplicationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CheckpointConfiguration" })
  checkpointConfiguration?: CheckpointConfiguration;

  @SpeakeasyMetadata({ data: "json, name=MonitoringConfiguration" })
  monitoringConfiguration?: MonitoringConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ParallelismConfiguration" })
  parallelismConfiguration?: ParallelismConfiguration;
}
