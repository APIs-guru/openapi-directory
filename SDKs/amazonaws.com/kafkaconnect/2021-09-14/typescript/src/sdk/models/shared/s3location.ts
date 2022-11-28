import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Location
/** 
 * The location of an object in Amazon S3.
**/
export class S3Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketArn" })
  bucketArn: string;

  @SpeakeasyMetadata({ data: "json, name=fileKey" })
  fileKey: string;

  @SpeakeasyMetadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
