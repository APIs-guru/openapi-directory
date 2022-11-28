import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCampaignVersionPathParams extends SpeakeasyBase {
    applicationId: string;
    campaignId: string;
    version: string;
}
export declare class GetCampaignVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCampaignVersionRequest extends SpeakeasyBase {
    pathParams: GetCampaignVersionPathParams;
    headers: GetCampaignVersionHeaders;
}
export declare class GetCampaignVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getCampaignVersionResponse?: shared.GetCampaignVersionResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
