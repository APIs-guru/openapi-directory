import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCampaignsPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetCampaignsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    token?: string;
}
export declare class GetCampaignsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCampaignsRequest extends SpeakeasyBase {
    pathParams: GetCampaignsPathParams;
    queryParams: GetCampaignsQueryParams;
    headers: GetCampaignsHeaders;
}
export declare class GetCampaignsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getCampaignsResponse?: shared.GetCampaignsResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
