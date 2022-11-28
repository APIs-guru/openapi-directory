import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBng2latlongEastingNorthingPathParams extends SpeakeasyBase {
    easting: number;
    northing: number;
}
export declare enum GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum {
    Ok = "ok",
    Error = "error"
}
export declare class GetBng2latlongEastingNorthing200ApplicationJson extends SpeakeasyBase {
    easting?: number;
    error?: string;
    latitude?: number;
    longitude?: number;
    northing?: number;
    status?: GetBng2latlongEastingNorthing200ApplicationJsonStatusEnum;
}
export declare class GetBng2latlongEastingNorthingRequest extends SpeakeasyBase {
    pathParams: GetBng2latlongEastingNorthingPathParams;
}
export declare class GetBng2latlongEastingNorthingResponse extends SpeakeasyBase {
    contentType: string;
    getBng2latlongEastingNorthing200ApplicationJsonObject?: GetBng2latlongEastingNorthing200ApplicationJson;
    statusCode: number;
}
