import { SpeakeasyBase } from "../../../internal/utils";
import { S3BucketLogDestination } from "./s3bucketlogdestination";
/**
 * The location of audio log files collected when conversation logging is enabled for a bot.
**/
export declare class AudioLogDestination extends SpeakeasyBase {
    s3Bucket: S3BucketLogDestination;
}
