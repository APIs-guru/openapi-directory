import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3ObjectSource } from "./s3objectsource";


// TemplateVersionSourceInput
/** 
 * Template version source data.
**/
export class TemplateVersionSourceInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3" })
  s3?: S3ObjectSource;
}
