import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2SearchDestinyEntitiesPathParams extends SpeakeasyBase {
    searchTerm: string;
    type: string;
}
export declare class Destiny2SearchDestinyEntitiesQueryParams extends SpeakeasyBase {
    page?: number;
}
export declare class Destiny2SearchDestinyEntitiesRequest extends SpeakeasyBase {
    pathParams: Destiny2SearchDestinyEntitiesPathParams;
    queryParams: Destiny2SearchDestinyEntitiesQueryParams;
}
export declare class Destiny2SearchDestinyEntitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
