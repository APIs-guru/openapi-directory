import { SpeakeasyBase } from "../../../internal/utils";
import { InputParallelism } from "./inputparallelism";
import { InputProcessingConfigurationDescription } from "./inputprocessingconfigurationdescription";
import { SourceSchema } from "./sourceschema";
import { InputStartingPositionConfiguration } from "./inputstartingpositionconfiguration";
import { KinesisFirehoseInputDescription } from "./kinesisfirehoseinputdescription";
import { KinesisStreamsInputDescription } from "./kinesisstreamsinputdescription";
/**
 * Describes the application input configuration for a SQL-based Kinesis Data Analytics application.
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
