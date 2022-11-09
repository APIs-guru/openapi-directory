import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3ObjectSource
/** 
 * Template bundle S3 bucket data.
**/
export class S3ObjectSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket: string;

  @Metadata({ data: "json, name=key" })
  key: string;
}
