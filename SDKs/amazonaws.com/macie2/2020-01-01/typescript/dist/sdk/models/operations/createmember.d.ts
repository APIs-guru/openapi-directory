import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateMemberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the details of an account to associate with an Amazon Macie administrator account.
**/
export declare class CreateMemberRequestBodyAccount extends SpeakeasyBase {
    accountId?: string;
    email?: string;
}
export declare class CreateMemberRequestBody extends SpeakeasyBase {
    account: CreateMemberRequestBodyAccount;
    tags?: Map<string, string>;
}
export declare class CreateMemberRequest extends SpeakeasyBase {
    headers: CreateMemberHeaders;
    request: CreateMemberRequestBody;
}
export declare class CreateMemberResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createMemberResponse?: shared.CreateMemberResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
