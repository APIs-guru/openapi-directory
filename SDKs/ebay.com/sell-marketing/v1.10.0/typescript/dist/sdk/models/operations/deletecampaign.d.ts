import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCampaignPathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class DeleteCampaignSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class DeleteCampaignRequest extends SpeakeasyBase {
    pathParams: DeleteCampaignPathParams;
    security: DeleteCampaignSecurity;
}
export declare class DeleteCampaignResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
