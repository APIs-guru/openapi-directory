import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResourceDelegatesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListResourceDelegatesXAmzTargetEnum {
    WorkMailServiceListResourceDelegates = "WorkMailService.ListResourceDelegates"
}
export declare class ListResourceDelegatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourceDelegatesXAmzTargetEnum;
}
export declare class ListResourceDelegatesRequest extends SpeakeasyBase {
    queryParams: ListResourceDelegatesQueryParams;
    headers: ListResourceDelegatesHeaders;
    request: shared.ListResourceDelegatesRequest;
}
export declare class ListResourceDelegatesResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    listResourceDelegatesResponse?: shared.ListResourceDelegatesResponse;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
