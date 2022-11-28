import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvitationsCountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInvitationsCountRequest extends SpeakeasyBase {
    headers: GetInvitationsCountHeaders;
}
export declare class GetInvitationsCountResponse extends SpeakeasyBase {
    contentType: string;
    getInvitationsCountResponse?: shared.GetInvitationsCountResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    statusCode: number;
}
