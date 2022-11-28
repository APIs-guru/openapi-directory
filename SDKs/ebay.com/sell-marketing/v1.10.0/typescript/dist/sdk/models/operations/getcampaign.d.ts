import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCampaignPathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class GetCampaignSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetCampaignRequest extends SpeakeasyBase {
    pathParams: GetCampaignPathParams;
    security: GetCampaignSecurity;
}
export declare class GetCampaignResponse extends SpeakeasyBase {
    campaign?: shared.Campaign;
    contentType: string;
    statusCode: number;
}
