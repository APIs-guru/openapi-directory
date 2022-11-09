import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=InAppStreamNames" })
  inAppStreamNames?: string[];

  @Metadata({ data: "json, name=InputId" })
  inputId?: string;

  @Metadata({ data: "json, name=InputParallelism" })
  inputParallelism?: InputParallelism;

  @Metadata({ data: "json, name=InputProcessingConfigurationDescription" })
  inputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

  @Metadata({ data: "json, name=InputSchema" })
  inputSchema?: SourceSchema;

  @Metadata({ data: "json, name=InputStartingPositionConfiguration" })
  inputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  @Metadata({ data: "json, name=KinesisFirehoseInputDescription" })
  kinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;

  @Metadata({ data: "json, name=KinesisStreamsInputDescription" })
  kinesisStreamsInputDescription?: KinesisStreamsInputDescription;

  @Metadata({ data: "json, name=NamePrefix" })
  namePrefix?: string;
}
