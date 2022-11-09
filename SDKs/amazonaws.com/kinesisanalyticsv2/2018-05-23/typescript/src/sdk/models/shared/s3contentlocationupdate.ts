import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3ContentLocationUpdate
/** 
 * Describes an update for the Amazon S3 code content location for an application.
**/
export class S3ContentLocationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketARNUpdate" })
  bucketArnUpdate?: string;

  @Metadata({ data: "json, name=FileKeyUpdate" })
  fileKeyUpdate?: string;

  @Metadata({ data: "json, name=ObjectVersionUpdate" })
  objectVersionUpdate?: string;
}
