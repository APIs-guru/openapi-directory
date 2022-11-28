import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputParallelism } from "./inputparallelism";
import { InputProcessingConfigurationDescription } from "./inputprocessingconfigurationdescription";
import { SourceSchema } from "./sourceschema";
import { InputStartingPositionConfiguration } from "./inputstartingpositionconfiguration";
import { KinesisFirehoseInputDescription } from "./kinesisfirehoseinputdescription";
import { KinesisStreamsInputDescription } from "./kinesisstreamsinputdescription";



// InputDescription
/** 
 * Describes the application input configuration for a SQL-based Kinesis Data Analytics application. 
**/
export class InputDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InAppStreamNames" })
  inAppStreamNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=InputId" })
  inputId?: string;

  @SpeakeasyMetadata({ data: "json, name=InputParallelism" })
  inputParallelism?: InputParallelism;

  @SpeakeasyMetadata({ data: "json, name=InputProcessingConfigurationDescription" })
  inputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

  @SpeakeasyMetadata({ data: "json, name=InputSchema" })
  inputSchema?: SourceSchema;

  @SpeakeasyMetadata({ data: "json, name=InputStartingPositionConfiguration" })
  inputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=KinesisFirehoseInputDescription" })
  kinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;

  @SpeakeasyMetadata({ data: "json, name=KinesisStreamsInputDescription" })
  kinesisStreamsInputDescription?: KinesisStreamsInputDescription;

  @SpeakeasyMetadata({ data: "json, name=NamePrefix" })
  namePrefix?: string;
}
