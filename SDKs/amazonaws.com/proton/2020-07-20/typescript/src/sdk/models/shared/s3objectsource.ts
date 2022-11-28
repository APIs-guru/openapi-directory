import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3ObjectSource
/** 
 * Template bundle S3 bucket data.
**/
export class S3ObjectSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;
}
