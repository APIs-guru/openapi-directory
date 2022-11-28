import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";



// CheckpointConfigurationDescription
/** 
 * Describes checkpointing parameters for a Flink-based Kinesis Data Analytics application.
**/
export class CheckpointConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CheckpointInterval" })
  checkpointInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=CheckpointingEnabled" })
  checkpointingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ConfigurationType" })
  configurationType?: ConfigurationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MinPauseBetweenCheckpoints" })
  minPauseBetweenCheckpoints?: number;
}
