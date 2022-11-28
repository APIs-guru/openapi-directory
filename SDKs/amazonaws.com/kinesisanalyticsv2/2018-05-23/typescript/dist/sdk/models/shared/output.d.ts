import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationSchema } from "./destinationschema";
import { KinesisFirehoseOutput } from "./kinesisfirehoseoutput";
import { KinesisStreamsOutput } from "./kinesisstreamsoutput";
import { LambdaOutput } from "./lambdaoutput";
/**
 * <p> Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/>
**/
export declare class Output extends SpeakeasyBase {
    destinationSchema: DestinationSchema;
    kinesisFirehoseOutput?: KinesisFirehoseOutput;
    kinesisStreamsOutput?: KinesisStreamsOutput;
    lambdaOutput?: LambdaOutput;
    name: string;
}
