import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCityFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetCityQueryParams extends SpeakeasyBase {
    format?: GetCityFormatEnum;
    key: string;
    lat: number;
    lng: number;
}
export declare class GetCityRequest extends SpeakeasyBase {
    queryParams: GetCityQueryParams;
}
export declare class GetCityResponse extends SpeakeasyBase {
    contentType: string;
    getCity200ApplicationJsonString?: string;
    statusCode: number;
}
