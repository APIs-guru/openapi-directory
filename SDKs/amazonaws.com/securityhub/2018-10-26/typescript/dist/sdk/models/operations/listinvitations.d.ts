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
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    listInvitationsResponse?: shared.ListInvitationsResponse;
    statusCode: number;
}
