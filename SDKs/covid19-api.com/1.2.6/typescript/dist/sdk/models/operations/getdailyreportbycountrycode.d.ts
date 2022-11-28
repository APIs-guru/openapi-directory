import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDailyReportByCountryCodeDateFormatEnum {
    YyyyMmDd = "YYYY-MM-DD",
    YyyyDdMm = "YYYY-DD-MM",
    DdMmYyyy = "DD-MM-YYYY",
    MmDdYyyy = "MM-DD-YYYY"
}
export declare enum GetDailyReportByCountryCodeFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetDailyReportByCountryCodeQueryParams extends SpeakeasyBase {
    code: string;
    date: string;
    dateFormat?: GetDailyReportByCountryCodeDateFormatEnum;
    format?: GetDailyReportByCountryCodeFormatEnum;
}
export declare class GetDailyReportByCountryCode200ApplicationJsonProvince extends SpeakeasyBase {
    active?: number;
    confirmed?: number;
    deaths?: number;
    recovered?: number;
}
export declare class GetDailyReportByCountryCode200ApplicationJson extends SpeakeasyBase {
    country?: string;
    date?: string;
    latitude?: number;
    longitude?: number;
    province?: GetDailyReportByCountryCode200ApplicationJsonProvince[];
}
export declare class GetDailyReportByCountryCodeRequest extends SpeakeasyBase {
    queryParams: GetDailyReportByCountryCodeQueryParams;
}
export declare class GetDailyReportByCountryCodeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getDailyReportByCountryCode200ApplicationJsonObjects?: GetDailyReportByCountryCode200ApplicationJson[];
}
