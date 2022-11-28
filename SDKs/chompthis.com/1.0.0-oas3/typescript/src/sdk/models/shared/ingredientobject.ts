import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IngredientObjectItemsCalorieConversionFactor
/** 
 * An object containing the multiplication factors to be used when calculating energy from macronutrients for a specific food.
**/
export class IngredientObjectItemsCalorieConversionFactor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carbohydrate_value" })
  carbohydrateValue?: number;

  @SpeakeasyMetadata({ data: "json, name=fat_value" })
  fatValue?: number;

  @SpeakeasyMetadata({ data: "json, name=protein_value" })
  proteinValue?: number;
}


// IngredientObjectItemsComponents
/** 
 * An object containing information on a specific component of this food item
**/
export class IngredientObjectItemsComponents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data_points" })
  dataPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=gram_weight" })
  gramWeight?: number;

  @SpeakeasyMetadata({ data: "json, name=is_refuse" })
  isRefuse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pct_weight" })
  pctWeight?: number;
}


// IngredientObjectItemsNutrients
/** 
 * An object containing information for a specific nutrient found in this food item
**/
export class IngredientObjectItemsNutrients extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data_points" })
  dataPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=footnote" })
  footnote?: string;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=measurement_unit" })
  measurementUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=median" })
  median?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=per_100g" })
  per100g?: number;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;
}


// IngredientObjectItemsPortions
/** 
 * An object containing information on a specific food portion found in this item
**/
export class IngredientObjectItemsPortions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data_points" })
  dataPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=footnote" })
  footnote?: string;

  @SpeakeasyMetadata({ data: "json, name=gram_weight" })
  gramWeight?: number;

  @SpeakeasyMetadata({ data: "json, name=measurement_unit" })
  measurementUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=modifier" })
  modifier?: string;
}


// IngredientObjectItems
/** 
 * An object containing information for this specific item.
**/
export class IngredientObjectItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calorie_conversion_factor" })
  calorieConversionFactor?: IngredientObjectItemsCalorieConversionFactor;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=common_name" })
  commonName?: string;

  @SpeakeasyMetadata({ data: "json, name=components", elemType: IngredientObjectItemsComponents })
  components?: IngredientObjectItemsComponents[];

  @SpeakeasyMetadata({ data: "json, name=footnote" })
  footnote?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nutrients", elemType: IngredientObjectItemsNutrients })
  nutrients?: IngredientObjectItemsNutrients[];

  @SpeakeasyMetadata({ data: "json, name=portions", elemType: IngredientObjectItemsPortions })
  portions?: IngredientObjectItemsPortions[];

  @SpeakeasyMetadata({ data: "json, name=protein_conversion_factor" })
  proteinConversionFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: string;

  @SpeakeasyMetadata({ data: "json, name=search_term" })
  searchTerm?: string;
}


// IngredientObject
/** 
 * Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
**/
export class IngredientObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: IngredientObjectItems })
  items?: IngredientObjectItems[];
}
