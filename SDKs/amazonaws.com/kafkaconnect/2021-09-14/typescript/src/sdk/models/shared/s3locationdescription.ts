import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3LocationDescription
/** 
 * The description of the location of an object in Amazon S3.
**/
export class S3LocationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketArn" })
  bucketArn?: string;

  @Metadata({ data: "json, name=fileKey" })
  fileKey?: string;

  @Metadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
