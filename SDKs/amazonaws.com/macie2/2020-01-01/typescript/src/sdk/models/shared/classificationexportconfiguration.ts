import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Destination } from "./s3destination";


// ClassificationExportConfiguration
/** 
 * Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.
**/
export class ClassificationExportConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3Destination" })
  s3Destination?: S3Destination;
}
