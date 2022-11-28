import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainStatisticsReportPathParams extends SpeakeasyBase {
    domain: string;
}
export declare class GetDomainStatisticsReportQueryParams extends SpeakeasyBase {
    endDate: Date;
    startDate: Date;
}
export declare class GetDomainStatisticsReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDomainStatisticsReportRequest extends SpeakeasyBase {
    pathParams: GetDomainStatisticsReportPathParams;
    queryParams: GetDomainStatisticsReportQueryParams;
    headers: GetDomainStatisticsReportHeaders;
}
export declare class GetDomainStatisticsReportResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getDomainStatisticsReportResponse?: shared.GetDomainStatisticsReportResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
