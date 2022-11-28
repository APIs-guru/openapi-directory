import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputLocation
/** 
 * The output location.
**/
export class OutputLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Prefix" })
  s3Prefix?: string;
}
