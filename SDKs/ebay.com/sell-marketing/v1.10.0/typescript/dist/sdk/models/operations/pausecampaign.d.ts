import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PauseCampaignPathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class PauseCampaignSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class PauseCampaignRequest extends SpeakeasyBase {
    pathParams: PauseCampaignPathParams;
    security: PauseCampaignSecurity;
}
export declare class PauseCampaignResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
