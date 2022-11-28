import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResumeCampaignPathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class ResumeCampaignSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class ResumeCampaignRequest extends SpeakeasyBase {
    pathParams: ResumeCampaignPathParams;
    security: ResumeCampaignSecurity;
}
export declare class ResumeCampaignResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
