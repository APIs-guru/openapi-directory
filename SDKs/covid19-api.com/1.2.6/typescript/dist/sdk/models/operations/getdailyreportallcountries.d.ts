import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDailyReportAllCountriesDateFormatEnum {
    YyyyMmDd = "YYYY-MM-DD",
    YyyyDdMm = "YYYY-DD-MM",
    DdMmYyyy = "DD-MM-YYYY",
    MmDdYyyy = "MM-DD-YYYY"
}
export declare enum GetDailyReportAllCountriesFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetDailyReportAllCountriesQueryParams extends SpeakeasyBase {
    date: string;
    dateFormat?: GetDailyReportAllCountriesDateFormatEnum;
    format?: GetDailyReportAllCountriesFormatEnum;
}
export declare class GetDailyReportAllCountries200ApplicationJsonProvince extends SpeakeasyBase {
    active?: number;
    confirmed?: number;
    deaths?: number;
    recovered?: number;
}
export declare class GetDailyReportAllCountries200ApplicationJson extends SpeakeasyBase {
    country?: string;
    date?: string;
    latitude?: number;
    longitude?: number;
    province?: GetDailyReportAllCountries200ApplicationJsonProvince[];
}
export declare class GetDailyReportAllCountriesRequest extends SpeakeasyBase {
    queryParams: GetDailyReportAllCountriesQueryParams;
}
export declare class GetDailyReportAllCountriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getDailyReportAllCountries200ApplicationJsonObjects?: GetDailyReportAllCountries200ApplicationJson[];
}
