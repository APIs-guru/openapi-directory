import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3ContentLocationUpdate
/** 
 * Describes an update for the Amazon S3 code content location for an application.
**/
export class S3ContentLocationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketARNUpdate" })
  bucketArnUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=FileKeyUpdate" })
  fileKeyUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=ObjectVersionUpdate" })
  objectVersionUpdate?: string;
}
