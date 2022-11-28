import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteMembersRequestBody extends SpeakeasyBase {
    accountIds: string[];
}
export declare class DeleteMembersRequest extends SpeakeasyBase {
    headers: DeleteMembersHeaders;
    request: DeleteMembersRequestBody;
}
export declare class DeleteMembersResponse extends SpeakeasyBase {
    contentType: string;
    deleteMembersResponse?: shared.DeleteMembersResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
