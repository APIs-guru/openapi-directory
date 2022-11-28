import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsageTotalsQueryParams extends SpeakeasyBase {
    timeRange?: string;
}
export declare class GetUsageTotalsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUsageTotalsRequest extends SpeakeasyBase {
    queryParams: GetUsageTotalsQueryParams;
    headers: GetUsageTotalsHeaders;
}
export declare class GetUsageTotalsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getUsageTotalsResponse?: shared.GetUsageTotalsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
