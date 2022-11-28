import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetArrivalsByCrsPathParams extends SpeakeasyBase {
    crs: string;
}
export declare class GetArrivalsByCrsQueryParams extends SpeakeasyBase {
    apiKey: string;
    filterStation?: string;
    numServices?: number;
    serviceDetails?: boolean;
    timeOffset?: number;
    timeWindow?: number;
}
export declare class GetArrivalsByCrsRequest extends SpeakeasyBase {
    pathParams: GetArrivalsByCrsPathParams;
    queryParams: GetArrivalsByCrsQueryParams;
}
export declare class GetArrivalsByCrsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
