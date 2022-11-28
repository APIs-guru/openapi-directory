import { SpeakeasyBase } from "../../../internal/utils";
export declare class SegmentAnalyticsQueryParams extends SpeakeasyBase {
    endingAt?: string;
    length?: string;
    segmentId?: string;
}
export declare class SegmentAnalyticsRequest extends SpeakeasyBase {
    queryParams: SegmentAnalyticsQueryParams;
}
export declare class SegmentAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
