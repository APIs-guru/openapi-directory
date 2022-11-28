import { SpeakeasyBase } from "../../../internal/utils";
export declare class NewsFeedCardAnalyticsQueryParams extends SpeakeasyBase {
    cardId?: string;
    endingAt?: string;
    length?: string;
    unit?: string;
}
export declare class NewsFeedCardAnalyticsRequest extends SpeakeasyBase {
    queryParams: NewsFeedCardAnalyticsQueryParams;
}
export declare class NewsFeedCardAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
