import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindCampaignByAdReferenceQueryParams extends SpeakeasyBase {
    inventoryReferenceId?: string;
    inventoryReferenceType?: string;
    listingId?: string;
}
export declare class FindCampaignByAdReferenceSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class FindCampaignByAdReferenceRequest extends SpeakeasyBase {
    queryParams: FindCampaignByAdReferenceQueryParams;
    security: FindCampaignByAdReferenceSecurity;
}
export declare class FindCampaignByAdReferenceResponse extends SpeakeasyBase {
    campaigns?: shared.Campaigns;
    contentType: string;
    statusCode: number;
}
