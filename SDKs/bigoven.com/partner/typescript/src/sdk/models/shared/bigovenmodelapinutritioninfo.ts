import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BigOvenModelApiNutritionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaloriesFromFat" })
  caloriesFromFat?: number;

  @SpeakeasyMetadata({ data: "json, name=Cholesterol" })
  cholesterol?: number;

  @SpeakeasyMetadata({ data: "json, name=CholesterolPct" })
  cholesterolPct?: number;

  @SpeakeasyMetadata({ data: "json, name=DietaryFiber" })
  dietaryFiber?: number;

  @SpeakeasyMetadata({ data: "json, name=DietaryFiberPct" })
  dietaryFiberPct?: number;

  @SpeakeasyMetadata({ data: "json, name=MonoFat" })
  monoFat?: number;

  @SpeakeasyMetadata({ data: "json, name=PolyFat" })
  polyFat?: number;

  @SpeakeasyMetadata({ data: "json, name=Potassium" })
  potassium?: number;

  @SpeakeasyMetadata({ data: "json, name=PotassiumPct" })
  potassiumPct?: number;

  @SpeakeasyMetadata({ data: "json, name=Protein" })
  protein?: number;

  @SpeakeasyMetadata({ data: "json, name=ProteinPct" })
  proteinPct?: number;

  @SpeakeasyMetadata({ data: "json, name=SatFat" })
  satFat?: number;

  @SpeakeasyMetadata({ data: "json, name=SatFatPct" })
  satFatPct?: number;

  @SpeakeasyMetadata({ data: "json, name=SingularYieldUnit" })
  singularYieldUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=Sodium" })
  sodium?: number;

  @SpeakeasyMetadata({ data: "json, name=SodiumPct" })
  sodiumPct?: number;

  @SpeakeasyMetadata({ data: "json, name=Sugar" })
  sugar?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCalories" })
  totalCalories?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCarbs" })
  totalCarbs?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCarbsPct" })
  totalCarbsPct?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalFat" })
  totalFat?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalFatPct" })
  totalFatPct?: number;

  @SpeakeasyMetadata({ data: "json, name=TransFat" })
  transFat?: number;
}
