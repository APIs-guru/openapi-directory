import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFavoritesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateFavoritesRequest extends SpeakeasyBase {
    headers: UpdateFavoritesHeaders;
    request: shared.UpdateFavoritesBulkRequest;
}
export declare class UpdateFavoritesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
