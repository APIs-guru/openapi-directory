import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeparturesByCrsPathParams extends SpeakeasyBase {
    crs: string;
}
export declare class GetDeparturesByCrsQueryParams extends SpeakeasyBase {
    apiKey: string;
    filterStation?: string;
    numServices?: number;
    serviceDetails?: boolean;
    timeOffset?: number;
    timeWindow?: number;
}
export declare class GetDeparturesByCrsRequest extends SpeakeasyBase {
    pathParams: GetDeparturesByCrsPathParams;
    queryParams: GetDeparturesByCrsQueryParams;
}
export declare class GetDeparturesByCrsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
