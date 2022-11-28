import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndCampaignPathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class EndCampaignSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class EndCampaignRequest extends SpeakeasyBase {
    pathParams: EndCampaignPathParams;
    security: EndCampaignSecurity;
}
export declare class EndCampaignResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
