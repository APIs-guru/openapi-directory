import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetLatestAllCountriesFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetLatestAllCountriesQueryParams extends SpeakeasyBase {
    format?: GetLatestAllCountriesFormatEnum;
}
export declare class GetLatestAllCountries200ApplicationJson extends SpeakeasyBase {
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
export declare class GetLatestAllCountriesRequest extends SpeakeasyBase {
    queryParams: GetLatestAllCountriesQueryParams;
}
export declare class GetLatestAllCountriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getLatestAllCountries200ApplicationJsonObjects?: GetLatestAllCountries200ApplicationJson[];
}
