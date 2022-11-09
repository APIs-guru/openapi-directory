import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Recipe } from "./recipe";


export class DescribeRecipeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=recipe" })
  recipe?: Recipe;
}
