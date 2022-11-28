import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnableMacieHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum EnableMacieRequestBodyFindingPublishingFrequencyEnum {
    FifteenMinutes = "FIFTEEN_MINUTES",
    OneHour = "ONE_HOUR",
    SixHours = "SIX_HOURS"
}
export declare enum EnableMacieRequestBodyStatusEnum {
    Paused = "PAUSED",
    Enabled = "ENABLED"
}
export declare class EnableMacieRequestBody extends SpeakeasyBase {
    clientToken?: string;
    findingPublishingFrequency?: EnableMacieRequestBodyFindingPublishingFrequencyEnum;
    status?: EnableMacieRequestBodyStatusEnum;
}
export declare class EnableMacieRequest extends SpeakeasyBase {
    headers: EnableMacieHeaders;
    request: EnableMacieRequestBody;
}
export declare class EnableMacieResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    enableMacieResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
