import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationType } from "./classificationtype";



// S3ResourceClassification
/** 
 * The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification. This data type is used as a request parameter in the AssociateS3Resources action and a response parameter in the ListS3Resources action. 
**/
export class S3ResourceClassification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=classificationType" })
  classificationType: ClassificationType;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;
}
