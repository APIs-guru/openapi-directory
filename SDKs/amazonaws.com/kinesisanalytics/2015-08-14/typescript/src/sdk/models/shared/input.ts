import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputParallelism } from "./inputparallelism";
import { InputProcessingConfiguration } from "./inputprocessingconfiguration";
import { SourceSchema } from "./sourceschema";
import { KinesisFirehoseInput } from "./kinesisfirehoseinput";
import { KinesisStreamsInput } from "./kinesisstreamsinput";


// Input
/** 
 * When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. 
**/
export class Input extends SpeakeasyBase {
  @Metadata({ data: "json, name=InputParallelism" })
  inputParallelism?: InputParallelism;

  @Metadata({ data: "json, name=InputProcessingConfiguration" })
  inputProcessingConfiguration?: InputProcessingConfiguration;

  @Metadata({ data: "json, name=InputSchema" })
  inputSchema: SourceSchema;

  @Metadata({ data: "json, name=KinesisFirehoseInput" })
  kinesisFirehoseInput?: KinesisFirehoseInput;

  @Metadata({ data: "json, name=KinesisStreamsInput" })
  kinesisStreamsInput?: KinesisStreamsInput;

  @Metadata({ data: "json, name=NamePrefix" })
  namePrefix: string;
}
