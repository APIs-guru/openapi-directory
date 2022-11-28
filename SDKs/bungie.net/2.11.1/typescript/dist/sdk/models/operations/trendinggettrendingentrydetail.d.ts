import { SpeakeasyBase } from "../../../internal/utils";
export declare class TrendingGetTrendingEntryDetailPathParams extends SpeakeasyBase {
    identifier: string;
    trendingEntryType: number;
}
export declare class TrendingGetTrendingEntryDetailRequest extends SpeakeasyBase {
    pathParams: TrendingGetTrendingEntryDetailPathParams;
}
export declare class TrendingGetTrendingEntryDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
