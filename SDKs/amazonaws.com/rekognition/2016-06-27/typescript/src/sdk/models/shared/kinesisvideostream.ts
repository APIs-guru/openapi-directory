import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisVideoStream
/** 
 * Kinesis video stream stream that provides the source streaming video for a Amazon Rekognition Video stream processor. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
**/
export class KinesisVideoStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;
}
