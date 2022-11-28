import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationSchema } from "./destinationschema";
import { KinesisFirehoseOutput } from "./kinesisfirehoseoutput";
import { KinesisStreamsOutput } from "./kinesisstreamsoutput";
import { LambdaOutput } from "./lambdaoutput";



// Output
/** 
 * <p> Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p> <p/> <p>For limits on how many destinations an application can write and other limitations, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p>
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
