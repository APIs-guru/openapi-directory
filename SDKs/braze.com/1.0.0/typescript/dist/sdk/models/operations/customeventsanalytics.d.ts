import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomEventsAnalyticsQueryParams extends SpeakeasyBase {
    appId?: string;
    endingAt?: string;
    event?: string;
    length?: string;
    segmentId?: string;
    unit?: string;
}
export declare class CustomEventsAnalyticsRequest extends SpeakeasyBase {
    queryParams: CustomEventsAnalyticsQueryParams;
}
export declare class CustomEventsAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
