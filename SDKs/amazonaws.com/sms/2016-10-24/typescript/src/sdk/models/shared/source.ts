import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";



// Source
/** 
 * Contains the location of a validation script.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3Location" })
  s3Location?: S3Location;
}
