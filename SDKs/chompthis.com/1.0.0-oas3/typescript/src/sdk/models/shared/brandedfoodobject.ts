import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// BrandedFoodObjectItemsCountryDetails
/** 
 * An object containing additional information on the countries where this item is found
**/
export class BrandedFoodObjectItemsCountryDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=english_speaking" })
  englishSpeaking?: number;

  @Metadata({ data: "json, name=non_english_speaking" })
  nonEnglishSpeaking?: number;
}


// BrandedFoodObjectItemsDietFlags
/** 
 * An object containing information on an individual ingredient that was flagged as potentially not being compatible with a certain diet
**/
export class BrandedFoodObjectItemsDietFlags extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibility_description" })
  compatibilityDescription?: string;

  @Metadata({ data: "json, name=compatibility_level" })
  compatibilityLevel?: number;

  @Metadata({ data: "json, name=diet_label" })
  dietLabel?: string;

  @Metadata({ data: "json, name=ingredient" })
  ingredient?: string;

  @Metadata({ data: "json, name=ingredient_description" })
  ingredientDescription?: string;

  @Metadata({ data: "json, name=is_allergen" })
  isAllergen?: boolean;

  @Metadata({ data: "json, name=is_compatible" })
  isCompatible?: string;
}


// BrandedFoodObjectItemsDietLabelsGlutenFree
/** 
 * An object containing information on this item's compatibility with Gluten Free diets
**/
export class BrandedFoodObjectItemsDietLabelsGlutenFree extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibility_level" })
  compatibilityLevel?: number;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=confidence_description" })
  confidenceDescription?: string;

  @Metadata({ data: "json, name=is_compatible" })
  isCompatible?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


// BrandedFoodObjectItemsDietLabelsVegan
/** 
 * An object containing information on this item's compatibility with the Vegan diets
**/
export class BrandedFoodObjectItemsDietLabelsVegan extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibility_level" })
  compatibilityLevel?: number;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=confidence_description" })
  confidenceDescription?: string;

  @Metadata({ data: "json, name=is_compatible" })
  isCompatible?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


// BrandedFoodObjectItemsDietLabelsVegetarian
/** 
 * An object containing information on this item's compatibility with Vegetarian diets
**/
export class BrandedFoodObjectItemsDietLabelsVegetarian extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibility_level" })
  compatibilityLevel?: number;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=confidence_description" })
  confidenceDescription?: string;

  @Metadata({ data: "json, name=is_compatible" })
  isCompatible?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


// BrandedFoodObjectItemsDietLabels
/** 
 * An object containing this item's compatibility grades for each supported diet
**/
export class BrandedFoodObjectItemsDietLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=gluten_free" })
  glutenFree?: BrandedFoodObjectItemsDietLabelsGlutenFree;

  @Metadata({ data: "json, name=vegan" })
  vegan?: BrandedFoodObjectItemsDietLabelsVegan;

  @Metadata({ data: "json, name=vegetarian" })
  vegetarian?: BrandedFoodObjectItemsDietLabelsVegetarian;
}


// BrandedFoodObjectItemsNutrients
/** 
 * An object containing information for a specific nutrient found in this food item
**/
export class BrandedFoodObjectItemsNutrients extends SpeakeasyBase {
  @Metadata({ data: "json, name=data_points" })
  dataPoints?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=measurement_unit" })
  measurementUnit?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=per_100g" })
  per100g?: number;

  @Metadata({ data: "json, name=rank" })
  rank?: number;
}


// BrandedFoodObjectItemsPackage
/** 
 * An object containing basic packaging information about this item
**/
export class BrandedFoodObjectItemsPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=size" })
  size?: string;
}


// BrandedFoodObjectItemsPackagingPhotosFront
/** 
 * An object containing photos of the front of this item's packaging
**/
export class BrandedFoodObjectItemsPackagingPhotosFront extends SpeakeasyBase {
  @Metadata({ data: "json, name=display" })
  display?: string;

  @Metadata({ data: "json, name=small" })
  small?: string;

  @Metadata({ data: "json, name=thumb" })
  thumb?: string;
}


// BrandedFoodObjectItemsPackagingPhotosIngredients
/** 
 * An object containing photos of the ingredients on this item's packaging
**/
export class BrandedFoodObjectItemsPackagingPhotosIngredients extends SpeakeasyBase {
  @Metadata({ data: "json, name=display" })
  display?: string;

  @Metadata({ data: "json, name=small" })
  small?: string;

  @Metadata({ data: "json, name=thumb" })
  thumb?: string;
}


// BrandedFoodObjectItemsPackagingPhotosNutrition
/** 
 * An object containing photos of this item's nutrition label
**/
export class BrandedFoodObjectItemsPackagingPhotosNutrition extends SpeakeasyBase {
  @Metadata({ data: "json, name=display" })
  display?: string;

  @Metadata({ data: "json, name=small" })
  small?: string;

  @Metadata({ data: "json, name=thumb" })
  thumb?: string;
}


// BrandedFoodObjectItemsPackagingPhotos
/** 
 * A object containing a collection of photos of this item's packaging
**/
export class BrandedFoodObjectItemsPackagingPhotos extends SpeakeasyBase {
  @Metadata({ data: "json, name=front" })
  front?: BrandedFoodObjectItemsPackagingPhotosFront;

  @Metadata({ data: "json, name=ingredients" })
  ingredients?: BrandedFoodObjectItemsPackagingPhotosIngredients;

  @Metadata({ data: "json, name=nutrition" })
  nutrition?: BrandedFoodObjectItemsPackagingPhotosNutrition;
}


// BrandedFoodObjectItemsServing
/** 
 * An object containing serving information for this item
**/
export class BrandedFoodObjectItemsServing extends SpeakeasyBase {
  @Metadata({ data: "json, name=measurement_unit" })
  measurementUnit?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=size_fulltext" })
  sizeFulltext?: string;
}


// BrandedFoodObjectItems
/** 
 * An object containing information for this specific item.
**/
export class BrandedFoodObjectItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=allergens" })
  allergens?: string[];

  @Metadata({ data: "json, name=barcode" })
  barcode?: string;

  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=brand_list" })
  brandList?: string[];

  @Metadata({ data: "json, name=categories" })
  categories?: string[];

  @Metadata({ data: "json, name=countries" })
  countries?: string[];

  @Metadata({ data: "json, name=country_details" })
  countryDetails?: BrandedFoodObjectItemsCountryDetails;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=diet_flags", elemType: shared.BrandedFoodObjectItemsDietFlags })
  dietFlags?: BrandedFoodObjectItemsDietFlags[];

  @Metadata({ data: "json, name=diet_labels" })
  dietLabels?: BrandedFoodObjectItemsDietLabels;

  @Metadata({ data: "json, name=has_english_ingredients" })
  hasEnglishIngredients?: boolean;

  @Metadata({ data: "json, name=ingredient_list" })
  ingredientList?: string[];

  @Metadata({ data: "json, name=ingredients" })
  ingredients?: string;

  @Metadata({ data: "json, name=keywords" })
  keywords?: string[];

  @Metadata({ data: "json, name=minerals" })
  minerals?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nutrients", elemType: shared.BrandedFoodObjectItemsNutrients })
  nutrients?: BrandedFoodObjectItemsNutrients[];

  @Metadata({ data: "json, name=package" })
  package?: BrandedFoodObjectItemsPackage;

  @Metadata({ data: "json, name=packaging_photos" })
  packagingPhotos?: BrandedFoodObjectItemsPackagingPhotos;

  @Metadata({ data: "json, name=palm_oil_ingredients" })
  palmOilIngredients?: string[];

  @Metadata({ data: "json, name=serving" })
  serving?: BrandedFoodObjectItemsServing;

  @Metadata({ data: "json, name=traces" })
  traces?: string[];

  @Metadata({ data: "json, name=vitamins" })
  vitamins?: string[];
}


// BrandedFoodObject
/** 
 * Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
**/
export class BrandedFoodObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.BrandedFoodObjectItems })
  items?: BrandedFoodObjectItems[];
}
