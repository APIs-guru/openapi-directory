import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisDataStream
/** 
 * The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
**/
export class KinesisDataStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
