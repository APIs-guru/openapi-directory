import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BigOvenModelApiIngredientInfo } from "./bigovenmodelapiingredientinfo";


export class BigOvenModelApiIngredient extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisplayIndex" })
  displayIndex?: number;

  @Metadata({ data: "json, name=DisplayQuantity" })
  displayQuantity?: string;

  @Metadata({ data: "json, name=HTMLName" })
  htmlName?: string;

  @Metadata({ data: "json, name=IngredientID" })
  ingredientId?: number;

  @Metadata({ data: "json, name=IngredientInfo" })
  ingredientInfo?: BigOvenModelApiIngredientInfo;

  @Metadata({ data: "json, name=IsHeading" })
  isHeading?: boolean;

  @Metadata({ data: "json, name=IsLinked" })
  isLinked?: boolean;

  @Metadata({ data: "json, name=MetricDisplayQuantity" })
  metricDisplayQuantity?: string;

  @Metadata({ data: "json, name=MetricQuantity" })
  metricQuantity?: number;

  @Metadata({ data: "json, name=MetricUnit" })
  metricUnit?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PreparationNotes" })
  preparationNotes?: string;

  @Metadata({ data: "json, name=Quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=Unit" })
  unit?: string;
}
