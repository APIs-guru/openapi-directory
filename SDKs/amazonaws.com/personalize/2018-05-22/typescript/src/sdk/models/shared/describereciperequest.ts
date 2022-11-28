import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeRecipeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recipeArn" })
  recipeArn: string;
}
