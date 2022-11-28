import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3LocationDescription
/** 
 * The description of the location of an object in Amazon S3.
**/
export class S3LocationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketArn" })
  bucketArn?: string;

  @SpeakeasyMetadata({ data: "json, name=fileKey" })
  fileKey?: string;

  @SpeakeasyMetadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
