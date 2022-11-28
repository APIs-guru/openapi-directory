import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStudioMemberPathParams extends SpeakeasyBase {
    principalId: string;
    studioId: string;
}
export declare class GetStudioMemberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStudioMemberRequest extends SpeakeasyBase {
    pathParams: GetStudioMemberPathParams;
    headers: GetStudioMemberHeaders;
}
export declare class GetStudioMemberResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getStudioMemberResponse?: shared.GetStudioMemberResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
