import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCampaignActivitiesPathParams extends SpeakeasyBase {
    applicationId: string;
    campaignId: string;
}
export declare class GetCampaignActivitiesQueryParams extends SpeakeasyBase {
    pageSize?: string;
    token?: string;
}
export declare class GetCampaignActivitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCampaignActivitiesRequest extends SpeakeasyBase {
    pathParams: GetCampaignActivitiesPathParams;
    queryParams: GetCampaignActivitiesQueryParams;
    headers: GetCampaignActivitiesHeaders;
}
export declare class GetCampaignActivitiesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getCampaignActivitiesResponse?: shared.GetCampaignActivitiesResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
