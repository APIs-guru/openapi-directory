import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";


// SsmOutput
/** 
 * Contains the location of validation output.
**/
export class SsmOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Location" })
  s3Location?: S3Location;
}
