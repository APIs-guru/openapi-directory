import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCampaignVersionsPathParams extends SpeakeasyBase {
    applicationId: string;
    campaignId: string;
}
export declare class GetCampaignVersionsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    token?: string;
}
export declare class GetCampaignVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCampaignVersionsRequest extends SpeakeasyBase {
    pathParams: GetCampaignVersionsPathParams;
    queryParams: GetCampaignVersionsQueryParams;
    headers: GetCampaignVersionsHeaders;
}
export declare class GetCampaignVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getCampaignVersionsResponse?: shared.GetCampaignVersionsResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
