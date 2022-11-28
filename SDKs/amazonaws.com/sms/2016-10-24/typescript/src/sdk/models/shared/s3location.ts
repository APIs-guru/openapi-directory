import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Location
/** 
 * Location of an Amazon S3 object.
**/
export class S3Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
