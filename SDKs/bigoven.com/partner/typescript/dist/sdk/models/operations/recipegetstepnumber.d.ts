import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecipeGetStepNumberQueryParams extends SpeakeasyBase {
    recipeId: number;
    userName: string;
}
export declare class RecipeGetStepNumberRequest extends SpeakeasyBase {
    queryParams: RecipeGetStepNumberQueryParams;
}
export declare class RecipeGetStepNumberResponse extends SpeakeasyBase {
    api2Result?: shared.Api2Result;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
