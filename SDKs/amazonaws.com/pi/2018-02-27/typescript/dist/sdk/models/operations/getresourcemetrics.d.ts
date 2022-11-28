import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetResourceMetricsXAmzTargetEnum {
    PerformanceInsightsv20180227GetResourceMetrics = "PerformanceInsightsv20180227.GetResourceMetrics"
}
export declare class GetResourceMetricsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourceMetricsXAmzTargetEnum;
}
export declare class GetResourceMetricsRequest extends SpeakeasyBase {
    headers: GetResourceMetricsHeaders;
    request: shared.GetResourceMetricsRequest;
}
export declare class GetResourceMetricsResponse extends SpeakeasyBase {
    contentType: string;
    getResourceMetricsResponse?: shared.GetResourceMetricsResponse;
    internalServiceError?: any;
    invalidArgumentException?: any;
    notAuthorizedException?: any;
    statusCode: number;
}
