import { SpeakeasyBase } from "../../../internal/utils";
export declare class CanvasDataSeriesAnalyticsQueryParams extends SpeakeasyBase {
    canvasId?: string;
    endingAt?: string;
    includeDeletedStepData?: string;
    includeStepBreakdown?: string;
    includeVariantBreakdown?: string;
    length?: string;
    startingAt?: string;
}
export declare class CanvasDataSeriesAnalyticsRequest extends SpeakeasyBase {
    queryParams: CanvasDataSeriesAnalyticsQueryParams;
}
export declare class CanvasDataSeriesAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
