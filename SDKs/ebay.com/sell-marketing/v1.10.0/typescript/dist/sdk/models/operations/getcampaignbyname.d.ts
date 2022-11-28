import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCampaignByNameQueryParams extends SpeakeasyBase {
    campaignName: string;
}
export declare class GetCampaignByNameSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetCampaignByNameRequest extends SpeakeasyBase {
    queryParams: GetCampaignByNameQueryParams;
    security: GetCampaignByNameSecurity;
}
export declare class GetCampaignByNameResponse extends SpeakeasyBase {
    campaign?: shared.Campaign;
    contentType: string;
    statusCode: number;
}
