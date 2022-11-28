import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";



// CheckpointConfigurationUpdate
/** 
 * Describes updates to the checkpointing parameters for a Flink-based Kinesis Data Analytics application.
**/
export class CheckpointConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CheckpointIntervalUpdate" })
  checkpointIntervalUpdate?: number;

  @SpeakeasyMetadata({ data: "json, name=CheckpointingEnabledUpdate" })
  checkpointingEnabledUpdate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ConfigurationTypeUpdate" })
  configurationTypeUpdate?: ConfigurationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MinPauseBetweenCheckpointsUpdate" })
  minPauseBetweenCheckpointsUpdate?: number;
}
