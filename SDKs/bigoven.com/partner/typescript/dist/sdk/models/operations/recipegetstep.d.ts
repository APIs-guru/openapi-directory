import { SpeakeasyBase } from "../../../internal/utils";
export declare class RecipeGetStepQueryParams extends SpeakeasyBase {
    recipeId: number;
    stepId: number;
    userName: string;
}
export declare class RecipeGetStepRequest extends SpeakeasyBase {
    queryParams: RecipeGetStepQueryParams;
}
export declare class RecipeGetStepResponse extends SpeakeasyBase {
    contentType: string;
    recipeGetStep200ApplicationJsonString?: string;
    recipeGetStep200ApplicationXmlString?: string;
    recipeGetStep200TextJsonString?: string;
    recipeGetStep200TextXmlString?: string;
    statusCode: number;
}
