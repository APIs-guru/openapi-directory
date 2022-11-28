import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BrandedFoodObjectItemsCountryDetails
/** 
 * An object containing additional information on the countries where this item is found
**/
export class BrandedFoodObjectItemsCountryDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=english_speaking" })
  englishSpeaking?: number;

  @SpeakeasyMetadata({ data: "json, name=non_english_speaking" })
  nonEnglishSpeaking?: number;
}


// BrandedFoodObjectItemsDietFlags
/** 
 * An object containing information on an individual ingredient that was flagged as potentially not being compatible with a certain diet
**/
export class BrandedFoodObjectItemsDietFlags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatibility_description" })
  compatibilityDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=compatibility_level" })
  compatibilityLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=diet_label" })
  dietLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=ingredient" })
  ingredient?: string;

  @SpeakeasyMetadata({ data: "json, name=ingredient_description" })
  ingredientDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=is_allergen" })
  isAllergen?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_compatible" })
  isCompatible?: string;
}


// BrandedFoodObjectItemsDietLabelsGlutenFree
/** 
 * An object containing information on this item's compatibility with Gluten Free diets
**/
export class BrandedFoodObjectItemsDietLabelsGlutenFree extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatibility_level" })
  compatibilityLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=confidence_description" })
  confidenceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=is_compatible" })
  isCompatible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// BrandedFoodObjectItemsDietLabelsVegan
/** 
 * An object containing information on this item's compatibility with the Vegan diets
**/
export class BrandedFoodObjectItemsDietLabelsVegan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatibility_level" })
  compatibilityLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=confidence_description" })
  confidenceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=is_compatible" })
  isCompatible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// BrandedFoodObjectItemsDietLabelsVegetarian
/** 
 * An object containing information on this item's compatibility with Vegetarian diets
**/
export class BrandedFoodObjectItemsDietLabelsVegetarian extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatibility_level" })
  compatibilityLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=confidence_description" })
  confidenceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=is_compatible" })
  isCompatible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// BrandedFoodObjectItemsDietLabels
/** 
 * An object containing this item's compatibility grades for each supported diet
**/
export class BrandedFoodObjectItemsDietLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gluten_free" })
  glutenFree?: BrandedFoodObjectItemsDietLabelsGlutenFree;

  @SpeakeasyMetadata({ data: "json, name=vegan" })
  vegan?: BrandedFoodObjectItemsDietLabelsVegan;

  @SpeakeasyMetadata({ data: "json, name=vegetarian" })
  vegetarian?: BrandedFoodObjectItemsDietLabelsVegetarian;
}


// BrandedFoodObjectItemsNutrients
/** 
 * An object containing information for a specific nutrient found in this food item
**/
export class BrandedFoodObjectItemsNutrients extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data_points" })
  dataPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=measurement_unit" })
  measurementUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=per_100g" })
  per100g?: number;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;
}


// BrandedFoodObjectItemsPackage
/** 
 * An object containing basic packaging information about this item
**/
export class BrandedFoodObjectItemsPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;
}


// BrandedFoodObjectItemsPackagingPhotosFront
/** 
 * An object containing photos of the front of this item's packaging
**/
export class BrandedFoodObjectItemsPackagingPhotosFront extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display" })
  display?: string;

  @SpeakeasyMetadata({ data: "json, name=small" })
  small?: string;

  @SpeakeasyMetadata({ data: "json, name=thumb" })
  thumb?: string;
}


// BrandedFoodObjectItemsPackagingPhotosIngredients
/** 
 * An object containing photos of the ingredients on this item's packaging
**/
export class BrandedFoodObjectItemsPackagingPhotosIngredients extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display" })
  display?: string;

  @SpeakeasyMetadata({ data: "json, name=small" })
  small?: string;

  @SpeakeasyMetadata({ data: "json, name=thumb" })
  thumb?: string;
}


// BrandedFoodObjectItemsPackagingPhotosNutrition
/** 
 * An object containing photos of this item's nutrition label
**/
export class BrandedFoodObjectItemsPackagingPhotosNutrition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display" })
  display?: string;

  @SpeakeasyMetadata({ data: "json, name=small" })
  small?: string;

  @SpeakeasyMetadata({ data: "json, name=thumb" })
  thumb?: string;
}


// BrandedFoodObjectItemsPackagingPhotos
/** 
 * A object containing a collection of photos of this item's packaging
**/
export class BrandedFoodObjectItemsPackagingPhotos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=front" })
  front?: BrandedFoodObjectItemsPackagingPhotosFront;

  @SpeakeasyMetadata({ data: "json, name=ingredients" })
  ingredients?: BrandedFoodObjectItemsPackagingPhotosIngredients;

  @SpeakeasyMetadata({ data: "json, name=nutrition" })
  nutrition?: BrandedFoodObjectItemsPackagingPhotosNutrition;
}


// BrandedFoodObjectItemsServing
/** 
 * An object containing serving information for this item
**/
export class BrandedFoodObjectItemsServing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=measurement_unit" })
  measurementUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=size_fulltext" })
  sizeFulltext?: string;
}


// BrandedFoodObjectItems
/** 
 * An object containing information for this specific item.
**/
export class BrandedFoodObjectItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allergens" })
  allergens?: string[];

  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: string;

  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=brand_list" })
  brandList?: string[];

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=countries" })
  countries?: string[];

  @SpeakeasyMetadata({ data: "json, name=country_details" })
  countryDetails?: BrandedFoodObjectItemsCountryDetails;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=diet_flags", elemType: BrandedFoodObjectItemsDietFlags })
  dietFlags?: BrandedFoodObjectItemsDietFlags[];

  @SpeakeasyMetadata({ data: "json, name=diet_labels" })
  dietLabels?: BrandedFoodObjectItemsDietLabels;

  @SpeakeasyMetadata({ data: "json, name=has_english_ingredients" })
  hasEnglishIngredients?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ingredient_list" })
  ingredientList?: string[];

  @SpeakeasyMetadata({ data: "json, name=ingredients" })
  ingredients?: string;

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=minerals" })
  minerals?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nutrients", elemType: BrandedFoodObjectItemsNutrients })
  nutrients?: BrandedFoodObjectItemsNutrients[];

  @SpeakeasyMetadata({ data: "json, name=package" })
  package?: BrandedFoodObjectItemsPackage;

  @SpeakeasyMetadata({ data: "json, name=packaging_photos" })
  packagingPhotos?: BrandedFoodObjectItemsPackagingPhotos;

  @SpeakeasyMetadata({ data: "json, name=palm_oil_ingredients" })
  palmOilIngredients?: string[];

  @SpeakeasyMetadata({ data: "json, name=serving" })
  serving?: BrandedFoodObjectItemsServing;

  @SpeakeasyMetadata({ data: "json, name=traces" })
  traces?: string[];

  @SpeakeasyMetadata({ data: "json, name=vitamins" })
  vitamins?: string[];
}


// BrandedFoodObject
/** 
 * Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
**/
export class BrandedFoodObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: BrandedFoodObjectItems })
  items?: BrandedFoodObjectItems[];
}
