import { SpeakeasyBase } from "../../../internal/utils";
import { InputParallelism } from "./inputparallelism";
import { InputProcessingConfiguration } from "./inputprocessingconfiguration";
import { SourceSchema } from "./sourceschema";
import { KinesisFirehoseInput } from "./kinesisfirehoseinput";
import { KinesisStreamsInput } from "./kinesisstreamsinput";
/**
 * When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
**/
export declare class Input extends SpeakeasyBase {
    inputParallelism?: InputParallelism;
    inputProcessingConfiguration?: InputProcessingConfiguration;
    inputSchema: SourceSchema;
    kinesisFirehoseInput?: KinesisFirehoseInput;
    kinesisStreamsInput?: KinesisStreamsInput;
    namePrefix: string;
}
