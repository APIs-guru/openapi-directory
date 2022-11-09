import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Location
/** 
 * Details of the S3 bucket that report generator reports are published to.
**/
export class S3Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=keyPrefix" })
  keyPrefix?: string;
}
