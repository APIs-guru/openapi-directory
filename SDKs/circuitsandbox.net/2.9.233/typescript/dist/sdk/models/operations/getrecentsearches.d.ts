import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecentSearchesSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetRecentSearchesRequest extends SpeakeasyBase {
    security: GetRecentSearchesSecurity;
}
export declare class GetRecentSearchesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
