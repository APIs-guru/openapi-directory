import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationTypeEnum } from "./configurationtypeenum";


// CheckpointConfiguration
/** 
 * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance"> Checkpoints for Fault Tolerance</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.
**/
export class CheckpointConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CheckpointInterval" })
  checkpointInterval?: number;

  @Metadata({ data: "json, name=CheckpointingEnabled" })
  checkpointingEnabled?: boolean;

  @Metadata({ data: "json, name=ConfigurationType" })
  configurationType: ConfigurationTypeEnum;

  @Metadata({ data: "json, name=MinPauseBetweenCheckpoints" })
  minPauseBetweenCheckpoints?: number;
}
