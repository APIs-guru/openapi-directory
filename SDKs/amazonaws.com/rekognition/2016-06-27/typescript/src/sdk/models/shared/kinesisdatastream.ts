import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisDataStream
/** 
 * The Kinesis data stream Amazon Rekognition to which the analysis results of a Amazon Rekognition stream processor are streamed. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
**/
export class KinesisDataStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;
}
