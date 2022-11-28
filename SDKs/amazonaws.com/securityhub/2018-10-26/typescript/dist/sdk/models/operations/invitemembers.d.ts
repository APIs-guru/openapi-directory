import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InviteMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class InviteMembersRequestBody extends SpeakeasyBase {
    accountIds: string[];
}
export declare class InviteMembersRequest extends SpeakeasyBase {
    headers: InviteMembersHeaders;
    request: InviteMembersRequestBody;
}
export declare class InviteMembersResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    inviteMembersResponse?: shared.InviteMembersResponse;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
