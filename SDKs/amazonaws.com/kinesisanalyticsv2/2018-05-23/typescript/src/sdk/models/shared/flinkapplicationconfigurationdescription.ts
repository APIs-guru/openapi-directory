import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CheckpointConfigurationDescription } from "./checkpointconfigurationdescription";
import { MonitoringConfigurationDescription } from "./monitoringconfigurationdescription";
import { ParallelismConfigurationDescription } from "./parallelismconfigurationdescription";



// FlinkApplicationConfigurationDescription
/** 
 * Describes configuration parameters for a Flink-based Kinesis Data Analytics application.
**/
export class FlinkApplicationConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CheckpointConfigurationDescription" })
  checkpointConfigurationDescription?: CheckpointConfigurationDescription;

  @SpeakeasyMetadata({ data: "json, name=JobPlanDescription" })
  jobPlanDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringConfigurationDescription" })
  monitoringConfigurationDescription?: MonitoringConfigurationDescription;

  @SpeakeasyMetadata({ data: "json, name=ParallelismConfigurationDescription" })
  parallelismConfigurationDescription?: ParallelismConfigurationDescription;
}
