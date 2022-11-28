import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesQueryParams extends SpeakeasyBase {
    paginationToken?: string;
    resourcesPerPage?: string;
}
export declare enum GetResourcesXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126GetResources = "ResourceGroupsTaggingAPI_20170126.GetResources"
}
export declare class GetResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourcesXAmzTargetEnum;
}
export declare class GetResourcesRequest extends SpeakeasyBase {
    queryParams: GetResourcesQueryParams;
    headers: GetResourcesHeaders;
    request: shared.GetResourcesInput;
}
export declare class GetResourcesResponse extends SpeakeasyBase {
    contentType: string;
    getResourcesOutput?: shared.GetResourcesOutput;
    internalServiceException?: any;
    invalidParameterException?: any;
    paginationTokenExpiredException?: any;
    statusCode: number;
    throttledException?: any;
}
