import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJourneyExecutionActivityMetricsPathParams extends SpeakeasyBase {
    applicationId: string;
    journeyActivityId: string;
    journeyId: string;
}
export declare class GetJourneyExecutionActivityMetricsQueryParams extends SpeakeasyBase {
    nextToken?: string;
    pageSize?: string;
}
export declare class GetJourneyExecutionActivityMetricsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetJourneyExecutionActivityMetricsRequest extends SpeakeasyBase {
    pathParams: GetJourneyExecutionActivityMetricsPathParams;
    queryParams: GetJourneyExecutionActivityMetricsQueryParams;
    headers: GetJourneyExecutionActivityMetricsHeaders;
}
export declare class GetJourneyExecutionActivityMetricsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getJourneyExecutionActivityMetricsResponse?: shared.GetJourneyExecutionActivityMetricsResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
