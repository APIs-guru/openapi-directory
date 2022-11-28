import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainDeliverabilityCampaignPathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class GetDomainDeliverabilityCampaignHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDomainDeliverabilityCampaignRequest extends SpeakeasyBase {
    pathParams: GetDomainDeliverabilityCampaignPathParams;
    headers: GetDomainDeliverabilityCampaignHeaders;
}
export declare class GetDomainDeliverabilityCampaignResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getDomainDeliverabilityCampaignResponse?: shared.GetDomainDeliverabilityCampaignResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
