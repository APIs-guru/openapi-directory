import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecipeGetStepsQueryParams extends SpeakeasyBase {
    recipeId: number;
    stepId: number;
    userName: string;
}
export declare class RecipeGetStepsRequest extends SpeakeasyBase {
    queryParams: RecipeGetStepsQueryParams;
}
export declare class RecipeGetStepsResponse extends SpeakeasyBase {
    bigOvenResult?: shared.BigOvenResult;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
