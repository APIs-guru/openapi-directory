import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApplicationDateRangeKpiPathParams extends SpeakeasyBase {
    applicationId: string;
    kpiName: string;
}
export declare class GetApplicationDateRangeKpiQueryParams extends SpeakeasyBase {
    endTime?: Date;
    nextToken?: string;
    pageSize?: string;
    startTime?: Date;
}
export declare class GetApplicationDateRangeKpiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApplicationDateRangeKpiRequest extends SpeakeasyBase {
    pathParams: GetApplicationDateRangeKpiPathParams;
    queryParams: GetApplicationDateRangeKpiQueryParams;
    headers: GetApplicationDateRangeKpiHeaders;
}
export declare class GetApplicationDateRangeKpiResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getApplicationDateRangeKpiResponse?: shared.GetApplicationDateRangeKpiResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
