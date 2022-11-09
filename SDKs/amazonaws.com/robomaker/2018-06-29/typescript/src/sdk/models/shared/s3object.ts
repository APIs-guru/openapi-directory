import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Object
/** 
 * Information about an S3 object.
**/
export class S3Object extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=key" })
  key: string;
}
