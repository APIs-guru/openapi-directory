import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetResourceLfTagsXAmzTargetEnum {
    AwsLakeFormationGetResourceLfTags = "AWSLakeFormation.GetResourceLFTags"
}
export declare class GetResourceLfTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourceLfTagsXAmzTargetEnum;
}
export declare class GetResourceLfTagsRequest extends SpeakeasyBase {
    headers: GetResourceLfTagsHeaders;
    request: shared.GetResourceLfTagsRequest;
}
export declare class GetResourceLfTagsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    entityNotFoundException?: any;
    getResourceLfTagsResponse?: shared.GetResourceLfTagsResponse;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
