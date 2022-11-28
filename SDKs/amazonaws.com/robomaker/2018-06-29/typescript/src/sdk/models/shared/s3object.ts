import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Object
/** 
 * Information about an S3 object.
**/
export class S3Object extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;
}
