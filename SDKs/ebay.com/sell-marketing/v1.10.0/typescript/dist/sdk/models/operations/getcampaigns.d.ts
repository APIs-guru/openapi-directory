import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCampaignsQueryParams extends SpeakeasyBase {
    campaignName?: string;
    campaignStatus?: string;
    endDateRange?: string;
    limit?: string;
    offset?: string;
    startDateRange?: string;
}
export declare class GetCampaignsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetCampaignsRequest extends SpeakeasyBase {
    queryParams: GetCampaignsQueryParams;
    security: GetCampaignsSecurity;
}
export declare class GetCampaignsResponse extends SpeakeasyBase {
    campaignPagedCollection?: shared.CampaignPagedCollection;
    contentType: string;
    statusCode: number;
}
