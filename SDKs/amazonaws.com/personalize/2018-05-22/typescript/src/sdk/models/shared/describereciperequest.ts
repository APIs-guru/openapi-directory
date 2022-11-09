import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeRecipeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=recipeArn" })
  recipeArn: string;
}
