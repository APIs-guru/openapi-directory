import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFavoritesByPersonIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    maxFaveDate?: number;
    minFaveDate?: number;
    page?: number;
    perPage?: number;
    userId: string;
}
export declare class GetFavoritesByPersonId200ApplicationJson extends SpeakeasyBase {
    page?: number;
    pages?: number;
    perpage?: number;
    photos?: shared.Photo[];
    total?: number;
}
export declare class GetFavoritesByPersonIdRequest extends SpeakeasyBase {
    queryParams: GetFavoritesByPersonIdQueryParams;
}
export declare class GetFavoritesByPersonIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getFavoritesByPersonId200ApplicationJsonObject?: GetFavoritesByPersonId200ApplicationJson;
}
