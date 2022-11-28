import { SpeakeasyBase } from "../../../internal/utils";
export declare class SendAnalyticsQueryParams extends SpeakeasyBase {
    campaignId?: string;
    endingAt?: string;
    length?: string;
    sendId?: string;
}
export declare class SendAnalyticsRequest extends SpeakeasyBase {
    queryParams: SendAnalyticsQueryParams;
}
export declare class SendAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
