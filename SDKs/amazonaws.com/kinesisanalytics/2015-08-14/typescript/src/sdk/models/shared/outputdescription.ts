import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationSchema } from "./destinationschema";
import { KinesisFirehoseOutputDescription } from "./kinesisfirehoseoutputdescription";
import { KinesisStreamsOutputDescription } from "./kinesisstreamsoutputdescription";
import { LambdaOutputDescription } from "./lambdaoutputdescription";



// OutputDescription
/** 
 * Describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. 
**/
export class OutputDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationSchema" })
  destinationSchema?: DestinationSchema;

  @SpeakeasyMetadata({ data: "json, name=KinesisFirehoseOutputDescription" })
  kinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;

  @SpeakeasyMetadata({ data: "json, name=KinesisStreamsOutputDescription" })
  kinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;

  @SpeakeasyMetadata({ data: "json, name=LambdaOutputDescription" })
  lambdaOutputDescription?: LambdaOutputDescription;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputId" })
  outputId?: string;
}
