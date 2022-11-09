import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetNextDeparturesByCrsPathParams extends SpeakeasyBase {
    crs: string;
}
export declare class GetNextDeparturesByCrsQueryParams extends SpeakeasyBase {
    apiKey: string;
    filterList: string;
    serviceDetails?: boolean;
    timeOffset?: number;
    timeWindow?: number;
}
export declare class GetNextDeparturesByCrsRequest extends SpeakeasyBase {
    pathParams: GetNextDeparturesByCrsPathParams;
    queryParams: GetNextDeparturesByCrsQueryParams;
}
export declare class GetNextDeparturesByCrsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
