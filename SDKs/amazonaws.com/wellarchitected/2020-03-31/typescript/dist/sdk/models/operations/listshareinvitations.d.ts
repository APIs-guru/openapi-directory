import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListShareInvitationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    workloadNamePrefix?: string;
}
export declare class ListShareInvitationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListShareInvitationsRequest extends SpeakeasyBase {
    queryParams: ListShareInvitationsQueryParams;
    headers: ListShareInvitationsHeaders;
}
export declare class ListShareInvitationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listShareInvitationsOutput?: shared.ListShareInvitationsOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
