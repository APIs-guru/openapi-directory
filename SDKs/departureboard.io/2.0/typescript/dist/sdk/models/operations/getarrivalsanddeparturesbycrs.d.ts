import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetArrivalsAndDeparturesByCrsPathParams extends SpeakeasyBase {
    crs: string;
}
export declare class GetArrivalsAndDeparturesByCrsQueryParams extends SpeakeasyBase {
    apiKey: string;
    filterStation?: string;
    filterType?: string;
    numServices?: number;
    serviceDetails?: boolean;
    timeOffset?: number;
    timeWindow?: number;
}
export declare class GetArrivalsAndDeparturesByCrsRequest extends SpeakeasyBase {
    pathParams: GetArrivalsAndDeparturesByCrsPathParams;
    queryParams: GetArrivalsAndDeparturesByCrsQueryParams;
}
export declare class GetArrivalsAndDeparturesByCrsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
