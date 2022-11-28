import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDailyReportTotalsDateFormatEnum {
    YyyyMmDd = "YYYY-MM-DD",
    YyyyDdMm = "YYYY-DD-MM",
    DdMmYyyy = "DD-MM-YYYY",
    MmDdYyyy = "MM-DD-YYYY"
}
export declare enum GetDailyReportTotalsFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetDailyReportTotalsQueryParams extends SpeakeasyBase {
    date?: string;
    dateFormat?: GetDailyReportTotalsDateFormatEnum;
    format?: GetDailyReportTotalsFormatEnum;
}
export declare class GetDailyReportTotals200ApplicationJson extends SpeakeasyBase {
    active?: number;
    confirmed?: number;
    critical?: number;
    date?: string;
    deaths?: number;
    recovered?: number;
}
export declare class GetDailyReportTotalsRequest extends SpeakeasyBase {
    queryParams: GetDailyReportTotalsQueryParams;
}
export declare class GetDailyReportTotalsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getDailyReportTotals200ApplicationJsonObjects?: GetDailyReportTotals200ApplicationJson[];
}
