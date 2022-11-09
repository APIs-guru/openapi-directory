import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";


// CheckpointConfigurationUpdate
/** 
 * Describes updates to the checkpointing parameters for a Flink-based Kinesis Data Analytics application.
**/
export class CheckpointConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=CheckpointIntervalUpdate" })
  checkpointIntervalUpdate?: number;

  @Metadata({ data: "json, name=CheckpointingEnabledUpdate" })
  checkpointingEnabledUpdate?: boolean;

  @Metadata({ data: "json, name=ConfigurationTypeUpdate" })
  configurationTypeUpdate?: ConfigurationTypeEnum;

  @Metadata({ data: "json, name=MinPauseBetweenCheckpointsUpdate" })
  minPauseBetweenCheckpointsUpdate?: number;
}
