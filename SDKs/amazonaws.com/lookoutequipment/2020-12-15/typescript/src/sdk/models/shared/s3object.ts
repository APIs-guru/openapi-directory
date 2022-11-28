import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Object
/** 
 * Contains information about an S3 bucket. 
**/
export class S3Object extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;
}
