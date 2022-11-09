import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// IngredientObjectItemsCalorieConversionFactor
/** 
 * An object containing the multiplication factors to be used when calculating energy from macronutrients for a specific food.
**/
export class IngredientObjectItemsCalorieConversionFactor extends SpeakeasyBase {
  @Metadata({ data: "json, name=carbohydrate_value" })
  carbohydrateValue?: number;

  @Metadata({ data: "json, name=fat_value" })
  fatValue?: number;

  @Metadata({ data: "json, name=protein_value" })
  proteinValue?: number;
}


// IngredientObjectItemsComponents
/** 
 * An object containing information on a specific component of this food item
**/
export class IngredientObjectItemsComponents extends SpeakeasyBase {
  @Metadata({ data: "json, name=data_points" })
  dataPoints?: number;

  @Metadata({ data: "json, name=gram_weight" })
  gramWeight?: number;

  @Metadata({ data: "json, name=is_refuse" })
  isRefuse?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pct_weight" })
  pctWeight?: number;
}


// IngredientObjectItemsNutrients
/** 
 * An object containing information for a specific nutrient found in this food item
**/
export class IngredientObjectItemsNutrients extends SpeakeasyBase {
  @Metadata({ data: "json, name=data_points" })
  dataPoints?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=footnote" })
  footnote?: string;

  @Metadata({ data: "json, name=max" })
  max?: number;

  @Metadata({ data: "json, name=measurement_unit" })
  measurementUnit?: string;

  @Metadata({ data: "json, name=median" })
  median?: number;

  @Metadata({ data: "json, name=min" })
  min?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=per_100g" })
  per100g?: number;

  @Metadata({ data: "json, name=rank" })
  rank?: number;
}


// IngredientObjectItemsPortions
/** 
 * An object containing information on a specific food portion found in this item
**/
export class IngredientObjectItemsPortions extends SpeakeasyBase {
  @Metadata({ data: "json, name=data_points" })
  dataPoints?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=footnote" })
  footnote?: string;

  @Metadata({ data: "json, name=gram_weight" })
  gramWeight?: number;

  @Metadata({ data: "json, name=measurement_unit" })
  measurementUnit?: string;

  @Metadata({ data: "json, name=modifier" })
  modifier?: string;
}


// IngredientObjectItems
/** 
 * An object containing information for this specific item.
**/
export class IngredientObjectItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=calorie_conversion_factor" })
  calorieConversionFactor?: IngredientObjectItemsCalorieConversionFactor;

  @Metadata({ data: "json, name=categories" })
  categories?: string[];

  @Metadata({ data: "json, name=common_name" })
  commonName?: string;

  @Metadata({ data: "json, name=components", elemType: shared.IngredientObjectItemsComponents })
  components?: IngredientObjectItemsComponents[];

  @Metadata({ data: "json, name=footnote" })
  footnote?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nutrients", elemType: shared.IngredientObjectItemsNutrients })
  nutrients?: IngredientObjectItemsNutrients[];

  @Metadata({ data: "json, name=portions", elemType: shared.IngredientObjectItemsPortions })
  portions?: IngredientObjectItemsPortions[];

  @Metadata({ data: "json, name=protein_conversion_factor" })
  proteinConversionFactor?: number;

  @Metadata({ data: "json, name=score" })
  score?: string;

  @Metadata({ data: "json, name=search_term" })
  searchTerm?: string;
}


// IngredientObject
/** 
 * Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
**/
export class IngredientObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.IngredientObjectItems })
  items?: IngredientObjectItems[];
}
