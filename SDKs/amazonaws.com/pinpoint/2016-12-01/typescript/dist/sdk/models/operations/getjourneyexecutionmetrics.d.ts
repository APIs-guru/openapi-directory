import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJourneyExecutionMetricsPathParams extends SpeakeasyBase {
    applicationId: string;
    journeyId: string;
}
export declare class GetJourneyExecutionMetricsQueryParams extends SpeakeasyBase {
    nextToken?: string;
    pageSize?: string;
}
export declare class GetJourneyExecutionMetricsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetJourneyExecutionMetricsRequest extends SpeakeasyBase {
    pathParams: GetJourneyExecutionMetricsPathParams;
    queryParams: GetJourneyExecutionMetricsQueryParams;
    headers: GetJourneyExecutionMetricsHeaders;
}
export declare class GetJourneyExecutionMetricsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getJourneyExecutionMetricsResponse?: shared.GetJourneyExecutionMetricsResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
