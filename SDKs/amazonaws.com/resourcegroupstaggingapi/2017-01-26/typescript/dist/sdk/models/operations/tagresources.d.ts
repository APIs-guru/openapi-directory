import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum TagResourcesXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126TagResources = "ResourceGroupsTaggingAPI_20170126.TagResources"
}
export declare class TagResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourcesXAmzTargetEnum;
}
export declare class TagResourcesRequest extends SpeakeasyBase {
    headers: TagResourcesHeaders;
    request: shared.TagResourcesInput;
}
export declare class TagResourcesResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidParameterException?: any;
    statusCode: number;
    tagResourcesOutput?: shared.TagResourcesOutput;
    throttledException?: any;
}
