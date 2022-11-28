import { SpeakeasyBase } from "../../../internal/utils";
export declare class BalanceLookupQueryParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class BalanceLookupRequest extends SpeakeasyBase {
    queryParams: BalanceLookupQueryParams;
}
export declare class BalanceLookupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
