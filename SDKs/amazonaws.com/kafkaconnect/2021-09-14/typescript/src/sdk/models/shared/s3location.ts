import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Location
/** 
 * The location of an object in Amazon S3.
**/
export class S3Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketArn" })
  bucketArn: string;

  @Metadata({ data: "json, name=fileKey" })
  fileKey: string;

  @Metadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
