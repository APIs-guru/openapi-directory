import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetFoodBrandedSearchPhpDietEnum {
    Vegan = "Vegan",
    Vegetarian = "Vegetarian",
    GlutenFree = "Gluten Free"
}
export declare class GetFoodBrandedSearchPhpQueryParams extends SpeakeasyBase {
    allergen?: string;
    brand?: string;
    category?: string;
    country?: string;
    diet?: GetFoodBrandedSearchPhpDietEnum;
    ingredient?: string;
    keyword?: string;
    limit?: number;
    mineral?: string;
    nutrient?: string;
    page?: number;
    palmOil?: string;
    trace?: string;
    vitamin?: string;
}
export declare class GetFoodBrandedSearchPhpSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetFoodBrandedSearchPhpRequest extends SpeakeasyBase {
    queryParams: GetFoodBrandedSearchPhpQueryParams;
    security: GetFoodBrandedSearchPhpSecurity;
}
export declare class GetFoodBrandedSearchPhpResponse extends SpeakeasyBase {
    brandedFoodObject?: shared.BrandedFoodObject;
    contentType: string;
    statusCode: number;
}
