import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationSchema } from "./destinationschema";
import { KinesisFirehoseOutputDescription } from "./kinesisfirehoseoutputdescription";
import { KinesisStreamsOutputDescription } from "./kinesisstreamsoutputdescription";
import { LambdaOutputDescription } from "./lambdaoutputdescription";
/**
 * For a SQL-based Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.
**/
export declare class OutputDescription extends SpeakeasyBase {
    destinationSchema?: DestinationSchema;
    kinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;
    kinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;
    lambdaOutputDescription?: LambdaOutputDescription;
    name?: string;
    outputId?: string;
}
