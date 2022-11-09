import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Object } from "./s3object";


// Video
/** 
 * Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
**/
export class Video extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Object" })
  s3Object?: S3Object;
}
