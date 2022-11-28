import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CollectionGetCollectionPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CollectionGetCollectionQueryParams extends SpeakeasyBase {
    pg?: number;
    rpp?: number;
    sessionForLogging?: string;
    test?: boolean;
}
export declare class CollectionGetCollectionRequest extends SpeakeasyBase {
    pathParams: CollectionGetCollectionPathParams;
    queryParams: CollectionGetCollectionQueryParams;
}
export declare class CollectionGetCollectionResponse extends SpeakeasyBase {
    bigOvenModelApi2RecipeSearchResult?: shared.BigOvenModelApi2RecipeSearchResult;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
