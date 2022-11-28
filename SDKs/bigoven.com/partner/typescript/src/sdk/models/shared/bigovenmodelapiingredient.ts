import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiIngredientInfo } from "./bigovenmodelapiingredientinfo";



export class BigOvenModelApiIngredient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisplayIndex" })
  displayIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=DisplayQuantity" })
  displayQuantity?: string;

  @SpeakeasyMetadata({ data: "json, name=HTMLName" })
  htmlName?: string;

  @SpeakeasyMetadata({ data: "json, name=IngredientID" })
  ingredientId?: number;

  @SpeakeasyMetadata({ data: "json, name=IngredientInfo" })
  ingredientInfo?: BigOvenModelApiIngredientInfo;

  @SpeakeasyMetadata({ data: "json, name=IsHeading" })
  isHeading?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsLinked" })
  isLinked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MetricDisplayQuantity" })
  metricDisplayQuantity?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricQuantity" })
  metricQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=MetricUnit" })
  metricUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PreparationNotes" })
  preparationNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=Quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: string;
}
