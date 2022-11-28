import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFastestDeparturesByCrsPathParams extends SpeakeasyBase {
    crs: string;
}
export declare class GetFastestDeparturesByCrsQueryParams extends SpeakeasyBase {
    apiKey: string;
    filterList: string;
    serviceDetails?: boolean;
    timeOffset?: number;
    timeWindow?: number;
}
export declare class GetFastestDeparturesByCrsRequest extends SpeakeasyBase {
    pathParams: GetFastestDeparturesByCrsPathParams;
    queryParams: GetFastestDeparturesByCrsQueryParams;
}
export declare class GetFastestDeparturesByCrsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
