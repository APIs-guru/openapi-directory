import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateMembersRequestBody extends SpeakeasyBase {
    accountDetails: shared.AccountDetails[];
}
export declare class CreateMembersRequest extends SpeakeasyBase {
    headers: CreateMembersHeaders;
    request: CreateMembersRequestBody;
}
export declare class CreateMembersResponse extends SpeakeasyBase {
    contentType: string;
    createMembersResponse?: shared.CreateMembersResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceConflictException?: any;
    statusCode: number;
}
