import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResourcesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListResourcesXAmzTargetEnum {
    WorkMailServiceListResources = "WorkMailService.ListResources"
}
export declare class ListResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourcesXAmzTargetEnum;
}
export declare class ListResourcesRequest extends SpeakeasyBase {
    queryParams: ListResourcesQueryParams;
    headers: ListResourcesHeaders;
    request: shared.ListResourcesRequest;
}
export declare class ListResourcesResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    listResourcesResponse?: shared.ListResourcesResponse;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
