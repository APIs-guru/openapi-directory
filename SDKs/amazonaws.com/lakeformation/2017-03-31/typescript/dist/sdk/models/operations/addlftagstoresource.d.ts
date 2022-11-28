import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddLfTagsToResourceXAmzTargetEnum {
    AwsLakeFormationAddLfTagsToResource = "AWSLakeFormation.AddLFTagsToResource"
}
export declare class AddLfTagsToResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddLfTagsToResourceXAmzTargetEnum;
}
export declare class AddLfTagsToResourceRequest extends SpeakeasyBase {
    headers: AddLfTagsToResourceHeaders;
    request: shared.AddLfTagsToResourceRequest;
}
export declare class AddLfTagsToResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    addLfTagsToResourceResponse?: shared.AddLfTagsToResourceResponse;
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
