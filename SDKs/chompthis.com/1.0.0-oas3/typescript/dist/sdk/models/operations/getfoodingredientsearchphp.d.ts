import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFoodIngredientSearchPhpQueryParams extends SpeakeasyBase {
    find: string;
    limit?: number;
}
export declare class GetFoodIngredientSearchPhpSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetFoodIngredientSearchPhpRequest extends SpeakeasyBase {
    queryParams: GetFoodIngredientSearchPhpQueryParams;
    security: GetFoodIngredientSearchPhpSecurity;
}
export declare class GetFoodIngredientSearchPhpResponse extends SpeakeasyBase {
    contentType: string;
    ingredientObject?: shared.IngredientObject;
    statusCode: number;
}
