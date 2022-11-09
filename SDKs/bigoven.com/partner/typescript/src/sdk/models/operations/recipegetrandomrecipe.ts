import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeGetRandomRecipeResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApiRecipe?: shared.BigOvenModelApiRecipe;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
