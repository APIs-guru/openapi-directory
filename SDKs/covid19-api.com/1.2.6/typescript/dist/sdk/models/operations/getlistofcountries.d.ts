import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListOfCountriesFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetListOfCountriesQueryParams extends SpeakeasyBase {
    format?: GetListOfCountriesFormatEnum;
}
export declare class GetListOfCountries200ApplicationJson extends SpeakeasyBase {
    alpha2Code?: string;
    alpha3Code?: string;
    latitude?: number;
    longitude?: number;
    name?: string;
}
export declare class GetListOfCountriesRequest extends SpeakeasyBase {
    queryParams: GetListOfCountriesQueryParams;
}
export declare class GetListOfCountriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getListOfCountries200ApplicationJsonObjects?: GetListOfCountries200ApplicationJson[];
}
