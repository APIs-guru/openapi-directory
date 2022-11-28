import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destiny2SearchDestinyPlayerPathParams extends SpeakeasyBase {
    displayName: string;
    membershipType: number;
}
export declare class Destiny2SearchDestinyPlayerQueryParams extends SpeakeasyBase {
    returnOriginalProfile?: boolean;
}
export declare class Destiny2SearchDestinyPlayerRequest extends SpeakeasyBase {
    pathParams: Destiny2SearchDestinyPlayerPathParams;
    queryParams: Destiny2SearchDestinyPlayerQueryParams;
}
export declare class Destiny2SearchDestinyPlayerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
