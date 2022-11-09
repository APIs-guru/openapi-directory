import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationSchema } from "./destinationschema";
import { KinesisFirehoseOutputDescription } from "./kinesisfirehoseoutputdescription";
import { KinesisStreamsOutputDescription } from "./kinesisstreamsoutputdescription";
import { LambdaOutputDescription } from "./lambdaoutputdescription";
/**
 * Describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream.
**/
export declare class OutputDescription extends SpeakeasyBase {
    destinationSchema?: DestinationSchema;
    kinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;
    kinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;
    lambdaOutputDescription?: LambdaOutputDescription;
    name?: string;
    outputId?: string;
}
