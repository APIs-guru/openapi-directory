import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Recipe } from "./recipe";



export class DescribeRecipeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recipe" })
  recipe?: Recipe;
}
