import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Bucket } from "./s3bucket";
import { S3Object } from "./s3object";


// ResourcesAffected
/** 
 * Provides information about the resources that a finding applies to.
**/
export class ResourcesAffected extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Bucket" })
  s3Bucket?: S3Bucket;

  @Metadata({ data: "json, name=s3Object" })
  s3Object?: S3Object;
}
