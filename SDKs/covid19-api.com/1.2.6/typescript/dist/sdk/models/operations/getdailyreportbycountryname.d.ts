import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDailyReportByCountryNameDateFormatEnum {
    YyyyMmDd = "YYYY-MM-DD",
    YyyyDdMm = "YYYY-DD-MM",
    DdMmYyyy = "DD-MM-YYYY",
    MmDdYyyy = "MM-DD-YYYY"
}
export declare enum GetDailyReportByCountryNameFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetDailyReportByCountryNameQueryParams extends SpeakeasyBase {
    date: string;
    dateFormat?: GetDailyReportByCountryNameDateFormatEnum;
    format?: GetDailyReportByCountryNameFormatEnum;
    name: string;
}
export declare class GetDailyReportByCountryName200ApplicationJsonProvince extends SpeakeasyBase {
    active?: number;
    confirmed?: number;
    deaths?: number;
    recovered?: number;
}
export declare class GetDailyReportByCountryName200ApplicationJson extends SpeakeasyBase {
    country?: string;
    date?: string;
    latitude?: number;
    longitude?: number;
    province?: GetDailyReportByCountryName200ApplicationJsonProvince[];
}
export declare class GetDailyReportByCountryNameRequest extends SpeakeasyBase {
    queryParams: GetDailyReportByCountryNameQueryParams;
}
export declare class GetDailyReportByCountryNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getDailyReportByCountryName200ApplicationJsonObjects?: GetDailyReportByCountryName200ApplicationJson[];
}
