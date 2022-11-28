import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListInvitationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListInvitationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListInvitationsRequest extends SpeakeasyBase {
    queryParams: ListInvitationsQueryParams;
    headers: ListInvitationsHeaders;
}
export declare class ListInvitationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    listInvitationsResponse?: shared.ListInvitationsResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
