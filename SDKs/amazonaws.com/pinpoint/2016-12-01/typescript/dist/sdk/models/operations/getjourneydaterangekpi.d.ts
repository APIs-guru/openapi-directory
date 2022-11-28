import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJourneyDateRangeKpiPathParams extends SpeakeasyBase {
    applicationId: string;
    journeyId: string;
    kpiName: string;
}
export declare class GetJourneyDateRangeKpiQueryParams extends SpeakeasyBase {
    endTime?: Date;
    nextToken?: string;
    pageSize?: string;
    startTime?: Date;
}
export declare class GetJourneyDateRangeKpiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetJourneyDateRangeKpiRequest extends SpeakeasyBase {
    pathParams: GetJourneyDateRangeKpiPathParams;
    queryParams: GetJourneyDateRangeKpiQueryParams;
    headers: GetJourneyDateRangeKpiHeaders;
}
export declare class GetJourneyDateRangeKpiResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getJourneyDateRangeKpiResponse?: shared.GetJourneyDateRangeKpiResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
