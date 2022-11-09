import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3LocationDescription } from "./s3locationdescription";


// CustomPluginLocationDescription
/** 
 * Information about the location of a custom plugin.
**/
export class CustomPluginLocationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Location" })
  s3Location?: S3LocationDescription;
}
