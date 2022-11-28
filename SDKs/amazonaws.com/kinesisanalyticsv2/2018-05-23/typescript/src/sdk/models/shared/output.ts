import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationSchema } from "./destinationschema";
import { KinesisFirehoseOutput } from "./kinesisfirehoseoutput";
import { KinesisStreamsOutput } from "./kinesisstreamsoutput";
import { LambdaOutput } from "./lambdaoutput";



// Output
/** 
 * <p> Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/>
**/
export class Output extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationSchema" })
  destinationSchema: DestinationSchema;

  @SpeakeasyMetadata({ data: "json, name=KinesisFirehoseOutput" })
  kinesisFirehoseOutput?: KinesisFirehoseOutput;

  @SpeakeasyMetadata({ data: "json, name=KinesisStreamsOutput" })
  kinesisStreamsOutput?: KinesisStreamsOutput;

  @SpeakeasyMetadata({ data: "json, name=LambdaOutput" })
  lambdaOutput?: LambdaOutput;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
