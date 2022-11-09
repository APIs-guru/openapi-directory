import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BigOvenModelApiNutritionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaloriesFromFat" })
  caloriesFromFat?: number;

  @Metadata({ data: "json, name=Cholesterol" })
  cholesterol?: number;

  @Metadata({ data: "json, name=CholesterolPct" })
  cholesterolPct?: number;

  @Metadata({ data: "json, name=DietaryFiber" })
  dietaryFiber?: number;

  @Metadata({ data: "json, name=DietaryFiberPct" })
  dietaryFiberPct?: number;

  @Metadata({ data: "json, name=MonoFat" })
  monoFat?: number;

  @Metadata({ data: "json, name=PolyFat" })
  polyFat?: number;

  @Metadata({ data: "json, name=Potassium" })
  potassium?: number;

  @Metadata({ data: "json, name=PotassiumPct" })
  potassiumPct?: number;

  @Metadata({ data: "json, name=Protein" })
  protein?: number;

  @Metadata({ data: "json, name=ProteinPct" })
  proteinPct?: number;

  @Metadata({ data: "json, name=SatFat" })
  satFat?: number;

  @Metadata({ data: "json, name=SatFatPct" })
  satFatPct?: number;

  @Metadata({ data: "json, name=SingularYieldUnit" })
  singularYieldUnit?: string;

  @Metadata({ data: "json, name=Sodium" })
  sodium?: number;

  @Metadata({ data: "json, name=SodiumPct" })
  sodiumPct?: number;

  @Metadata({ data: "json, name=Sugar" })
  sugar?: number;

  @Metadata({ data: "json, name=TotalCalories" })
  totalCalories?: number;

  @Metadata({ data: "json, name=TotalCarbs" })
  totalCarbs?: number;

  @Metadata({ data: "json, name=TotalCarbsPct" })
  totalCarbsPct?: number;

  @Metadata({ data: "json, name=TotalFat" })
  totalFat?: number;

  @Metadata({ data: "json, name=TotalFatPct" })
  totalFatPct?: number;

  @Metadata({ data: "json, name=TransFat" })
  transFat?: number;
}
