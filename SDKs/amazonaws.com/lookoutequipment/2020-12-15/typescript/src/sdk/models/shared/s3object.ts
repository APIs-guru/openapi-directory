import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Object
/** 
 * Contains information about an S3 bucket. 
**/
export class S3Object extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bucket" })
  bucket: string;

  @Metadata({ data: "json, name=Key" })
  key: string;
}
