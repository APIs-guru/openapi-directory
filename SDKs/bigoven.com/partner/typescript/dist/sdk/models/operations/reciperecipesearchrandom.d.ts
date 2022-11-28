import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecipeRecipeSearchRandomQueryParams extends SpeakeasyBase {
    anyKw?: string;
    boostmine?: boolean;
    champion?: number;
    chs?: number;
    coll?: number;
    cps?: number;
    cuisine?: string;
    db?: string;
    dyf?: number;
    excludeCat?: string;
    excludeIng?: string;
    excludePrimarycat?: string;
    filter?: string;
    folder?: string;
    glf?: number;
    includeCat?: string;
    includeIng?: string;
    includePrimarycat?: string;
    maxIngredients?: number;
    minIngredients?: number;
    ntf?: number;
    photos?: boolean;
    rmf?: number;
    servingsMin?: number;
    sff?: number;
    slf?: number;
    synonyms?: boolean;
    titleKw?: string;
    tnf?: number;
    token?: string;
    totalMins?: number;
    userId?: number;
    username?: string;
    userset?: string;
    vgn?: number;
    vtn?: number;
    wmf?: number;
}
export declare class RecipeRecipeSearchRandomRequest extends SpeakeasyBase {
    queryParams: RecipeRecipeSearchRandomQueryParams;
}
export declare class RecipeRecipeSearchRandomResponse extends SpeakeasyBase {
    bigOvenModelApi2RecipeSearchResult?: shared.BigOvenModelApi2RecipeSearchResult;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
