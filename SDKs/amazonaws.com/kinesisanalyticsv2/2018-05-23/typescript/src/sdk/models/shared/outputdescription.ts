import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationSchema } from "./destinationschema";
import { KinesisFirehoseOutputDescription } from "./kinesisfirehoseoutputdescription";
import { KinesisStreamsOutputDescription } from "./kinesisstreamsoutputdescription";
import { LambdaOutputDescription } from "./lambdaoutputdescription";


// OutputDescription
/** 
 * For a SQL-based Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. 
**/
export class OutputDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationSchema" })
  destinationSchema?: DestinationSchema;

  @Metadata({ data: "json, name=KinesisFirehoseOutputDescription" })
  kinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;

  @Metadata({ data: "json, name=KinesisStreamsOutputDescription" })
  kinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;

  @Metadata({ data: "json, name=LambdaOutputDescription" })
  lambdaOutputDescription?: LambdaOutputDescription;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OutputId" })
  outputId?: string;
}
