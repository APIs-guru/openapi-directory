import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KinesisDataStream } from "./kinesisdatastream";



// StreamProcessorOutput
/** 
 * Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
**/
export class StreamProcessorOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KinesisDataStream" })
  kinesisDataStream?: KinesisDataStream;
}
