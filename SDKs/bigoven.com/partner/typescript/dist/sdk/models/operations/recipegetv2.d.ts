import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecipeGetV2PathParams extends SpeakeasyBase {
    id: number;
}
export declare class RecipeGetV2QueryParams extends SpeakeasyBase {
    prefetch?: boolean;
}
export declare class RecipeGetV2Request extends SpeakeasyBase {
    pathParams: RecipeGetV2PathParams;
    queryParams: RecipeGetV2QueryParams;
}
export declare class RecipeGetV2Response extends SpeakeasyBase {
    api2ModelsRecipesRecipeResponse?: shared.Api2ModelsRecipesRecipeResponse;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
