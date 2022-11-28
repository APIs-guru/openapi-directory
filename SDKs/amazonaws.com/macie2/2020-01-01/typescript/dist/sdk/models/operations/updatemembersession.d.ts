import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateMemberSessionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateMemberSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateMemberSessionRequestBodyStatusEnum {
    Paused = "PAUSED",
    Enabled = "ENABLED"
}
export declare class UpdateMemberSessionRequestBody extends SpeakeasyBase {
    status: UpdateMemberSessionRequestBodyStatusEnum;
}
export declare class UpdateMemberSessionRequest extends SpeakeasyBase {
    pathParams: UpdateMemberSessionPathParams;
    headers: UpdateMemberSessionHeaders;
    request: UpdateMemberSessionRequestBody;
}
export declare class UpdateMemberSessionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateMemberSessionResponse?: Map<string, any>;
    validationException?: any;
}
