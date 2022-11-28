import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3ObjectSource } from "./s3objectsource";



// TemplateVersionSourceInput
/** 
 * Template version source data.
**/
export class TemplateVersionSourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3" })
  s3?: S3ObjectSource;
}
