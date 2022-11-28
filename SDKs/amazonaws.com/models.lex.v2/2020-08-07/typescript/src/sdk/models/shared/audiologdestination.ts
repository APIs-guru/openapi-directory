import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3BucketLogDestination } from "./s3bucketlogdestination";



// AudioLogDestination
/** 
 * The location of audio log files collected when conversation logging is enabled for a bot.
**/
export class AudioLogDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Bucket" })
  s3Bucket: S3BucketLogDestination;
}
