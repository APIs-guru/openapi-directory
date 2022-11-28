import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDomainDeliverabilityCampaignsPathParams extends SpeakeasyBase {
    subscribedDomain: string;
}
export declare class ListDomainDeliverabilityCampaignsQueryParams extends SpeakeasyBase {
    endDate: Date;
    nextToken?: string;
    pageSize?: number;
    startDate: Date;
}
export declare class ListDomainDeliverabilityCampaignsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDomainDeliverabilityCampaignsRequest extends SpeakeasyBase {
    pathParams: ListDomainDeliverabilityCampaignsPathParams;
    queryParams: ListDomainDeliverabilityCampaignsQueryParams;
    headers: ListDomainDeliverabilityCampaignsHeaders;
}
export declare class ListDomainDeliverabilityCampaignsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listDomainDeliverabilityCampaignsResponse?: shared.ListDomainDeliverabilityCampaignsResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
