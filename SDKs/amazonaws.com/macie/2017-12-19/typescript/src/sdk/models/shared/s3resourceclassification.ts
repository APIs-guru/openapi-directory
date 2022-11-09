import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClassificationType } from "./classificationtype";


// S3ResourceClassification
/** 
 * The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification. This data type is used as a request parameter in the AssociateS3Resources action and a response parameter in the ListS3Resources action. 
**/
export class S3ResourceClassification extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=classificationType" })
  classificationType: ClassificationType;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;
}
