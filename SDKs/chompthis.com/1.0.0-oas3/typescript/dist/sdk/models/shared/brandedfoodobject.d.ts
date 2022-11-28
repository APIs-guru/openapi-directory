import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object containing additional information on the countries where this item is found
**/
export declare class BrandedFoodObjectItemsCountryDetails extends SpeakeasyBase {
    englishSpeaking?: number;
    nonEnglishSpeaking?: number;
}
/**
 * An object containing information on an individual ingredient that was flagged as potentially not being compatible with a certain diet
**/
export declare class BrandedFoodObjectItemsDietFlags extends SpeakeasyBase {
    compatibilityDescription?: string;
    compatibilityLevel?: number;
    dietLabel?: string;
    ingredient?: string;
    ingredientDescription?: string;
    isAllergen?: boolean;
    isCompatible?: string;
}
/**
 * An object containing information on this item's compatibility with Gluten Free diets
**/
export declare class BrandedFoodObjectItemsDietLabelsGlutenFree extends SpeakeasyBase {
    compatibilityLevel?: number;
    confidence?: number;
    confidenceDescription?: string;
    isCompatible?: boolean;
    name?: string;
}
/**
 * An object containing information on this item's compatibility with the Vegan diets
**/
export declare class BrandedFoodObjectItemsDietLabelsVegan extends SpeakeasyBase {
    compatibilityLevel?: number;
    confidence?: number;
    confidenceDescription?: string;
    isCompatible?: boolean;
    name?: string;
}
/**
 * An object containing information on this item's compatibility with Vegetarian diets
**/
export declare class BrandedFoodObjectItemsDietLabelsVegetarian extends SpeakeasyBase {
    compatibilityLevel?: number;
    confidence?: number;
    confidenceDescription?: string;
    isCompatible?: boolean;
    name?: string;
}
/**
 * An object containing this item's compatibility grades for each supported diet
**/
export declare class BrandedFoodObjectItemsDietLabels extends SpeakeasyBase {
    glutenFree?: BrandedFoodObjectItemsDietLabelsGlutenFree;
    vegan?: BrandedFoodObjectItemsDietLabelsVegan;
    vegetarian?: BrandedFoodObjectItemsDietLabelsVegetarian;
}
/**
 * An object containing information for a specific nutrient found in this food item
**/
export declare class BrandedFoodObjectItemsNutrients extends SpeakeasyBase {
    dataPoints?: number;
    description?: string;
    measurementUnit?: string;
    name?: string;
    per100g?: number;
    rank?: number;
}
/**
 * An object containing basic packaging information about this item
**/
export declare class BrandedFoodObjectItemsPackage extends SpeakeasyBase {
    quantity?: number;
    size?: string;
}
/**
 * An object containing photos of the front of this item's packaging
**/
export declare class BrandedFoodObjectItemsPackagingPhotosFront extends SpeakeasyBase {
    display?: string;
    small?: string;
    thumb?: string;
}
/**
 * An object containing photos of the ingredients on this item's packaging
**/
export declare class BrandedFoodObjectItemsPackagingPhotosIngredients extends SpeakeasyBase {
    display?: string;
    small?: string;
    thumb?: string;
}
/**
 * An object containing photos of this item's nutrition label
**/
export declare class BrandedFoodObjectItemsPackagingPhotosNutrition extends SpeakeasyBase {
    display?: string;
    small?: string;
    thumb?: string;
}
/**
 * A object containing a collection of photos of this item's packaging
**/
export declare class BrandedFoodObjectItemsPackagingPhotos extends SpeakeasyBase {
    front?: BrandedFoodObjectItemsPackagingPhotosFront;
    ingredients?: BrandedFoodObjectItemsPackagingPhotosIngredients;
    nutrition?: BrandedFoodObjectItemsPackagingPhotosNutrition;
}
/**
 * An object containing serving information for this item
**/
export declare class BrandedFoodObjectItemsServing extends SpeakeasyBase {
    measurementUnit?: string;
    size?: string;
    sizeFulltext?: string;
}
/**
 * An object containing information for this specific item.
**/
export declare class BrandedFoodObjectItems extends SpeakeasyBase {
    allergens?: string[];
    barcode?: string;
    brand?: string;
    brandList?: string[];
    categories?: string[];
    countries?: string[];
    countryDetails?: BrandedFoodObjectItemsCountryDetails;
    description?: string;
    dietFlags?: BrandedFoodObjectItemsDietFlags[];
    dietLabels?: BrandedFoodObjectItemsDietLabels;
    hasEnglishIngredients?: boolean;
    ingredientList?: string[];
    ingredients?: string;
    keywords?: string[];
    minerals?: string[];
    name?: string;
    nutrients?: BrandedFoodObjectItemsNutrients[];
    package?: BrandedFoodObjectItemsPackage;
    packagingPhotos?: BrandedFoodObjectItemsPackagingPhotos;
    palmOilIngredients?: string[];
    serving?: BrandedFoodObjectItemsServing;
    traces?: string[];
    vitamins?: string[];
}
/**
 * Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
**/
export declare class BrandedFoodObject extends SpeakeasyBase {
    items?: BrandedFoodObjectItems[];
}
