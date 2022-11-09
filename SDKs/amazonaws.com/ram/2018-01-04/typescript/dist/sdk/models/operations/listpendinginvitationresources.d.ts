import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListPendingInvitationResourcesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListPendingInvitationResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPendingInvitationResourcesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceShareInvitationArn: string;
}
export declare class ListPendingInvitationResourcesRequest extends SpeakeasyBase {
    queryParams: ListPendingInvitationResourcesQueryParams;
    headers: ListPendingInvitationResourcesHeaders;
    request: ListPendingInvitationResourcesRequestBody;
}
export declare class ListPendingInvitationResourcesResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    listPendingInvitationResourcesResponse?: shared.ListPendingInvitationResourcesResponse;
    malformedArnException?: any;
    missingRequiredParameterException?: any;
    resourceShareInvitationAlreadyRejectedException?: any;
    resourceShareInvitationArnNotFoundException?: any;
    resourceShareInvitationExpiredException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
