import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCampaignDateRangeKpiPathParams extends SpeakeasyBase {
    applicationId: string;
    campaignId: string;
    kpiName: string;
}
export declare class GetCampaignDateRangeKpiQueryParams extends SpeakeasyBase {
    endTime?: Date;
    nextToken?: string;
    pageSize?: string;
    startTime?: Date;
}
export declare class GetCampaignDateRangeKpiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCampaignDateRangeKpiRequest extends SpeakeasyBase {
    pathParams: GetCampaignDateRangeKpiPathParams;
    queryParams: GetCampaignDateRangeKpiQueryParams;
    headers: GetCampaignDateRangeKpiHeaders;
}
export declare class GetCampaignDateRangeKpiResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getCampaignDateRangeKpiResponse?: shared.GetCampaignDateRangeKpiResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
