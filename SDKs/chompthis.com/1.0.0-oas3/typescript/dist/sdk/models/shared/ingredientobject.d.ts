import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An object containing the multiplication factors to be used when calculating energy from macronutrients for a specific food.
**/
export declare class IngredientObjectItemsCalorieConversionFactor extends SpeakeasyBase {
    carbohydrateValue?: number;
    fatValue?: number;
    proteinValue?: number;
}
/**
 * An object containing information on a specific component of this food item
**/
export declare class IngredientObjectItemsComponents extends SpeakeasyBase {
    dataPoints?: number;
    gramWeight?: number;
    isRefuse?: boolean;
    name?: string;
    pctWeight?: number;
}
/**
 * An object containing information for a specific nutrient found in this food item
**/
export declare class IngredientObjectItemsNutrients extends SpeakeasyBase {
    dataPoints?: number;
    description?: string;
    footnote?: string;
    max?: number;
    measurementUnit?: string;
    median?: number;
    min?: number;
    name?: string;
    per100g?: number;
    rank?: number;
}
/**
 * An object containing information on a specific food portion found in this item
**/
export declare class IngredientObjectItemsPortions extends SpeakeasyBase {
    dataPoints?: number;
    description?: string;
    footnote?: string;
    gramWeight?: number;
    measurementUnit?: string;
    modifier?: string;
}
/**
 * An object containing information for this specific item.
**/
export declare class IngredientObjectItems extends SpeakeasyBase {
    calorieConversionFactor?: IngredientObjectItemsCalorieConversionFactor;
    categories?: string[];
    commonName?: string;
    components?: IngredientObjectItemsComponents[];
    footnote?: string;
    name?: string;
    nutrients?: IngredientObjectItemsNutrients[];
    portions?: IngredientObjectItemsPortions[];
    proteinConversionFactor?: number;
    score?: string;
    searchTerm?: string;
}
/**
 * Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
**/
export declare class IngredientObject extends SpeakeasyBase {
    items?: IngredientObjectItems[];
}
