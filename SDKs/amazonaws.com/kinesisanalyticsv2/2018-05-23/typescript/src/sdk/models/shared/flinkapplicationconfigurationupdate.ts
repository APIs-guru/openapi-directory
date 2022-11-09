import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CheckpointConfigurationUpdate } from "./checkpointconfigurationupdate";
import { MonitoringConfigurationUpdate } from "./monitoringconfigurationupdate";
import { ParallelismConfigurationUpdate } from "./parallelismconfigurationupdate";


// FlinkApplicationConfigurationUpdate
/** 
 * Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application.
**/
export class FlinkApplicationConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=CheckpointConfigurationUpdate" })
  checkpointConfigurationUpdate?: CheckpointConfigurationUpdate;

  @Metadata({ data: "json, name=MonitoringConfigurationUpdate" })
  monitoringConfigurationUpdate?: MonitoringConfigurationUpdate;

  @Metadata({ data: "json, name=ParallelismConfigurationUpdate" })
  parallelismConfigurationUpdate?: ParallelismConfigurationUpdate;
}
