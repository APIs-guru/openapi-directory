import { SpeakeasyBase } from "../../../internal/utils";
export declare class CampaignAnalyticsQueryParams extends SpeakeasyBase {
    campaignId?: string;
    endingAt?: string;
    length?: string;
}
export declare class CampaignAnalyticsRequest extends SpeakeasyBase {
    queryParams: CampaignAnalyticsQueryParams;
}
export declare class CampaignAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
