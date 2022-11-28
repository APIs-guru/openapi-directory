import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMemberPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetMemberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMemberRequest extends SpeakeasyBase {
    pathParams: GetMemberPathParams;
    headers: GetMemberHeaders;
}
export declare class GetMemberResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getMemberResponse?: shared.GetMemberResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
