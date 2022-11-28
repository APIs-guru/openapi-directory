import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPagesByEngagementQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPagesByEngagementXAmzTargetEnum {
    SsmContactsListPagesByEngagement = "SSMContacts.ListPagesByEngagement"
}
export declare class ListPagesByEngagementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPagesByEngagementXAmzTargetEnum;
}
export declare class ListPagesByEngagementRequest extends SpeakeasyBase {
    queryParams: ListPagesByEngagementQueryParams;
    headers: ListPagesByEngagementHeaders;
    request: shared.ListPagesByEngagementRequest;
}
export declare class ListPagesByEngagementResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listPagesByEngagementResult?: shared.ListPagesByEngagementResult;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
