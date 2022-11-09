import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";


// CheckpointConfigurationDescription
/** 
 * Describes checkpointing parameters for a Flink-based Kinesis Data Analytics application.
**/
export class CheckpointConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CheckpointInterval" })
  checkpointInterval?: number;

  @Metadata({ data: "json, name=CheckpointingEnabled" })
  checkpointingEnabled?: boolean;

  @Metadata({ data: "json, name=ConfigurationType" })
  configurationType?: ConfigurationTypeEnum;

  @Metadata({ data: "json, name=MinPauseBetweenCheckpoints" })
  minPauseBetweenCheckpoints?: number;
}
