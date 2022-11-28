import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetLatestCountryDataByNameFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetLatestCountryDataByNameQueryParams extends SpeakeasyBase {
    format?: GetLatestCountryDataByNameFormatEnum;
    name: string;
}
export declare class GetLatestCountryDataByName200ApplicationJson extends SpeakeasyBase {
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
export declare class GetLatestCountryDataByNameRequest extends SpeakeasyBase {
    queryParams: GetLatestCountryDataByNameQueryParams;
}
export declare class GetLatestCountryDataByNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getLatestCountryDataByName200ApplicationJsonObjects?: GetLatestCountryDataByName200ApplicationJson[];
}
