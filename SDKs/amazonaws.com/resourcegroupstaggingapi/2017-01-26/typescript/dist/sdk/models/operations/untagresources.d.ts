import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UntagResourcesXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126UntagResources = "ResourceGroupsTaggingAPI_20170126.UntagResources"
}
export declare class UntagResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourcesXAmzTargetEnum;
}
export declare class UntagResourcesRequest extends SpeakeasyBase {
    headers: UntagResourcesHeaders;
    request: shared.UntagResourcesInput;
}
export declare class UntagResourcesResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidParameterException?: any;
    statusCode: number;
    throttledException?: any;
    untagResourcesOutput?: shared.UntagResourcesOutput;
}
