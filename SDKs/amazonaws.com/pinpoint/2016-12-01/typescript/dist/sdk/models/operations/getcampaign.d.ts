import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCampaignPathParams extends SpeakeasyBase {
    applicationId: string;
    campaignId: string;
}
export declare class GetCampaignHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCampaignRequest extends SpeakeasyBase {
    pathParams: GetCampaignPathParams;
    headers: GetCampaignHeaders;
}
export declare class GetCampaignResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getCampaignResponse?: shared.GetCampaignResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
