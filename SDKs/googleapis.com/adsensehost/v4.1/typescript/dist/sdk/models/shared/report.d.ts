import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportHeaders extends SpeakeasyBase {
    currency?: string;
    name?: string;
    type?: string;
}
export declare class Report extends SpeakeasyBase {
    averages?: string[];
    headers?: ReportHeaders[];
    kind?: string;
    rows?: string[][];
    totalMatchedRows?: string;
    totals?: string[];
    warnings?: string[];
}
