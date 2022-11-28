import { SpeakeasyBase } from "../../../internal/utils";
import { InputParallelism } from "./inputparallelism";
import { InputProcessingConfiguration } from "./inputprocessingconfiguration";
import { SourceSchema } from "./sourceschema";
import { KinesisFirehoseInput } from "./kinesisfirehoseinput";
import { KinesisStreamsInput } from "./kinesisstreamsinput";
/**
 * When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.
**/
export declare class Input extends SpeakeasyBase {
    inputParallelism?: InputParallelism;
    inputProcessingConfiguration?: InputProcessingConfiguration;
    inputSchema: SourceSchema;
    kinesisFirehoseInput?: KinesisFirehoseInput;
    kinesisStreamsInput?: KinesisStreamsInput;
    namePrefix: string;
}
