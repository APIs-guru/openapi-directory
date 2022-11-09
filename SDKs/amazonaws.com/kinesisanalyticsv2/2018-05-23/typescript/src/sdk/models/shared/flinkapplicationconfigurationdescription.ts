import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CheckpointConfigurationDescription } from "./checkpointconfigurationdescription";
import { MonitoringConfigurationDescription } from "./monitoringconfigurationdescription";
import { ParallelismConfigurationDescription } from "./parallelismconfigurationdescription";


// FlinkApplicationConfigurationDescription
/** 
 * Describes configuration parameters for a Flink-based Kinesis Data Analytics application.
**/
export class FlinkApplicationConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CheckpointConfigurationDescription" })
  checkpointConfigurationDescription?: CheckpointConfigurationDescription;

  @Metadata({ data: "json, name=JobPlanDescription" })
  jobPlanDescription?: string;

  @Metadata({ data: "json, name=MonitoringConfigurationDescription" })
  monitoringConfigurationDescription?: MonitoringConfigurationDescription;

  @Metadata({ data: "json, name=ParallelismConfigurationDescription" })
  parallelismConfigurationDescription?: ParallelismConfigurationDescription;
}
