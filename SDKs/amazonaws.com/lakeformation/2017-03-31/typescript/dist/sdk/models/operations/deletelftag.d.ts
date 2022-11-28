import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteLfTagXAmzTargetEnum {
    AwsLakeFormationDeleteLfTag = "AWSLakeFormation.DeleteLFTag"
}
export declare class DeleteLfTagHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLfTagXAmzTargetEnum;
}
export declare class DeleteLfTagRequest extends SpeakeasyBase {
    headers: DeleteLfTagHeaders;
    request: shared.DeleteLfTagRequest;
}
export declare class DeleteLfTagResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteLfTagResponse?: Map<string, any>;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
