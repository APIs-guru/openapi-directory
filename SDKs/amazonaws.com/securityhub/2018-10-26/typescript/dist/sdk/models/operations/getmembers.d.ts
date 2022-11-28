import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMembersRequestBody extends SpeakeasyBase {
    accountIds: string[];
}
export declare class GetMembersRequest extends SpeakeasyBase {
    headers: GetMembersHeaders;
    request: GetMembersRequestBody;
}
export declare class GetMembersResponse extends SpeakeasyBase {
    contentType: string;
    getMembersResponse?: shared.GetMembersResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
