import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCampaignIdentificationPathParams extends SpeakeasyBase {
    campaignId: string;
}
export declare class UpdateCampaignIdentificationSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class UpdateCampaignIdentificationRequest extends SpeakeasyBase {
    pathParams: UpdateCampaignIdentificationPathParams;
    request: shared.UpdateCampaignIdentificationRequest;
    security: UpdateCampaignIdentificationSecurity;
}
export declare class UpdateCampaignIdentificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
