import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DestinationSchema } from "./destinationschema";
import { KinesisFirehoseOutput } from "./kinesisfirehoseoutput";
import { KinesisStreamsOutput } from "./kinesisstreamsoutput";
import { LambdaOutput } from "./lambdaoutput";


// Output
/** 
 * <p> Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/>
**/
export class Output extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationSchema" })
  destinationSchema: DestinationSchema;

  @Metadata({ data: "json, name=KinesisFirehoseOutput" })
  kinesisFirehoseOutput?: KinesisFirehoseOutput;

  @Metadata({ data: "json, name=KinesisStreamsOutput" })
  kinesisStreamsOutput?: KinesisStreamsOutput;

  @Metadata({ data: "json, name=LambdaOutput" })
  lambdaOutput?: LambdaOutput;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
