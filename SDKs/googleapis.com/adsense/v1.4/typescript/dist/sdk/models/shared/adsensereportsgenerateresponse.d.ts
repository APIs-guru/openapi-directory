import { SpeakeasyBase } from "../../../internal/utils";
export declare class AdsenseReportsGenerateResponseHeaders extends SpeakeasyBase {
    currency?: string;
    name?: string;
    type?: string;
}
export declare class AdsenseReportsGenerateResponse extends SpeakeasyBase {
    averages?: string[];
    endDate?: string;
    headers?: AdsenseReportsGenerateResponseHeaders[];
    kind?: string;
    rows?: string[][];
    startDate?: string;
    totalMatchedRows?: string;
    totals?: string[];
    warnings?: string[];
}
