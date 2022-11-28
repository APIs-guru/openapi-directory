import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationType } from "./classificationtype";
/**
 * The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification. This data type is used as a request parameter in the AssociateS3Resources action and a response parameter in the ListS3Resources action.
**/
export declare class S3ResourceClassification extends SpeakeasyBase {
    bucketName: string;
    classificationType: ClassificationType;
    prefix?: string;
}
