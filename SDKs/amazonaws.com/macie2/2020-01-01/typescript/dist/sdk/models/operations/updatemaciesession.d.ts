import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateMacieSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum {
    FifteenMinutes = "FIFTEEN_MINUTES",
    OneHour = "ONE_HOUR",
    SixHours = "SIX_HOURS"
}
export declare enum UpdateMacieSessionRequestBodyStatusEnum {
    Paused = "PAUSED",
    Enabled = "ENABLED"
}
export declare class UpdateMacieSessionRequestBody extends SpeakeasyBase {
    findingPublishingFrequency?: UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum;
    status?: UpdateMacieSessionRequestBodyStatusEnum;
}
export declare class UpdateMacieSessionRequest extends SpeakeasyBase {
    headers: UpdateMacieSessionHeaders;
    request: UpdateMacieSessionRequestBody;
}
export declare class UpdateMacieSessionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateMacieSessionResponse?: Map<string, any>;
    validationException?: any;
}
