import { SpeakeasyBase } from "../../../internal/utils";
export declare class CampaignDetailsQueryParams extends SpeakeasyBase {
    campaignId?: string;
}
export declare class CampaignDetailsRequest extends SpeakeasyBase {
    queryParams: CampaignDetailsQueryParams;
}
export declare class CampaignDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
