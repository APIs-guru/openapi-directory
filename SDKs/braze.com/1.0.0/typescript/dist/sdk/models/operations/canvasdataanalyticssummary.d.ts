import { SpeakeasyBase } from "../../../internal/utils";
export declare class CanvasDataAnalyticsSummaryQueryParams extends SpeakeasyBase {
    canvasId?: string;
    endingAt?: string;
    includeDeletedStepData?: string;
    includeStepBreakdown?: string;
    includeVariantBreakdown?: string;
    length?: string;
    startingAt?: string;
}
export declare class CanvasDataAnalyticsSummaryRequest extends SpeakeasyBase {
    queryParams: CanvasDataAnalyticsSummaryQueryParams;
}
export declare class CanvasDataAnalyticsSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
