import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecipeGetPathParams extends SpeakeasyBase {
    id: number;
}
export declare class RecipeGetQueryParams extends SpeakeasyBase {
    prefetch?: boolean;
}
export declare class RecipeGetRequest extends SpeakeasyBase {
    pathParams: RecipeGetPathParams;
    queryParams: RecipeGetQueryParams;
}
export declare class RecipeGetResponse extends SpeakeasyBase {
    bigOvenModelApi2Recipe?: shared.BigOvenModelApi2Recipe;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
