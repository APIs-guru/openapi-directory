import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CheckpointConfigurationUpdate } from "./checkpointconfigurationupdate";
import { MonitoringConfigurationUpdate } from "./monitoringconfigurationupdate";
import { ParallelismConfigurationUpdate } from "./parallelismconfigurationupdate";



// FlinkApplicationConfigurationUpdate
/** 
 * Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application.
**/
export class FlinkApplicationConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CheckpointConfigurationUpdate" })
  checkpointConfigurationUpdate?: CheckpointConfigurationUpdate;

  @SpeakeasyMetadata({ data: "json, name=MonitoringConfigurationUpdate" })
  monitoringConfigurationUpdate?: MonitoringConfigurationUpdate;

  @SpeakeasyMetadata({ data: "json, name=ParallelismConfigurationUpdate" })
  parallelismConfigurationUpdate?: ParallelismConfigurationUpdate;
}
