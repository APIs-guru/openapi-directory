import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputParallelism } from "./inputparallelism";
import { InputProcessingConfigurationDescription } from "./inputprocessingconfigurationdescription";
import { SourceSchema } from "./sourceschema";
import { InputStartingPositionConfiguration } from "./inputstartingpositionconfiguration";
import { KinesisFirehoseInputDescription } from "./kinesisfirehoseinputdescription";
import { KinesisStreamsInputDescription } from "./kinesisstreamsinputdescription";
/**
 * Describes the application input configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
**/
export declare class InputDescription extends SpeakeasyBase {
    inAppStreamNames?: string[];
    inputId?: string;
    inputParallelism?: InputParallelism;
    inputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
    inputSchema?: SourceSchema;
    inputStartingPositionConfiguration?: InputStartingPositionConfiguration;
    kinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;
    kinesisStreamsInputDescription?: KinesisStreamsInputDescription;
    namePrefix?: string;
}
