import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RemoveLfTagsFromResourceXAmzTargetEnum {
    AwsLakeFormationRemoveLfTagsFromResource = "AWSLakeFormation.RemoveLFTagsFromResource"
}
export declare class RemoveLfTagsFromResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveLfTagsFromResourceXAmzTargetEnum;
}
export declare class RemoveLfTagsFromResourceRequest extends SpeakeasyBase {
    headers: RemoveLfTagsFromResourceHeaders;
    request: shared.RemoveLfTagsFromResourceRequest;
}
export declare class RemoveLfTagsFromResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    removeLfTagsFromResourceResponse?: shared.RemoveLfTagsFromResourceResponse;
    statusCode: number;
}
