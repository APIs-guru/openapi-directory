import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Contains information about the S3 resource. This data type is used as a request parameter in the DisassociateS3Resources action and can be used as a response parameter in the AssociateS3Resources and UpdateS3Resources actions.
**/
export declare class S3Resource extends SpeakeasyBase {
    bucketName: string;
    prefix?: string;
}
