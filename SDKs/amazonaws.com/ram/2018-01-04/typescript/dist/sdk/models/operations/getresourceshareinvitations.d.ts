import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourceShareInvitationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetResourceShareInvitationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResourceShareInvitationsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resourceShareArns?: string[];
    resourceShareInvitationArns?: string[];
}
export declare class GetResourceShareInvitationsRequest extends SpeakeasyBase {
    queryParams: GetResourceShareInvitationsQueryParams;
    headers: GetResourceShareInvitationsHeaders;
    request: GetResourceShareInvitationsRequestBody;
}
export declare class GetResourceShareInvitationsResponse extends SpeakeasyBase {
    contentType: string;
    getResourceShareInvitationsResponse?: shared.GetResourceShareInvitationsResponse;
    invalidMaxResultsException?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    malformedArnException?: any;
    resourceShareInvitationArnNotFoundException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unknownResourceException?: any;
}
