import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetLatestCountryDataByCodeFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetLatestCountryDataByCodeQueryParams extends SpeakeasyBase {
    code: string;
    format?: GetLatestCountryDataByCodeFormatEnum;
}
export declare class GetLatestCountryDataByCode200ApplicationJson extends SpeakeasyBase {
    confirmed?: number;
    country?: string;
    critical?: number;
    deaths?: number;
    lastChange?: Date;
    lastUpdate?: Date;
    latitude?: number;
    longitude?: number;
    recovered?: number;
}
export declare class GetLatestCountryDataByCodeRequest extends SpeakeasyBase {
    queryParams: GetLatestCountryDataByCodeQueryParams;
}
export declare class GetLatestCountryDataByCodeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getLatestCountryDataByCode200ApplicationJsonObjects?: GetLatestCountryDataByCode200ApplicationJson[];
}
