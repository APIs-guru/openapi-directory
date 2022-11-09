import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputLocation
/** 
 * The output location.
**/
export class OutputLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=s3Prefix" })
  s3Prefix?: string;
}
