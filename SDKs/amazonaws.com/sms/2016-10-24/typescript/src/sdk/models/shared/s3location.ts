import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Location
/** 
 * Location of an Amazon S3 object.
**/
export class S3Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;
}
