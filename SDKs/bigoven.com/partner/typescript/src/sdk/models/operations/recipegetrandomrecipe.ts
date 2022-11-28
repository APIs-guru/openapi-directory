import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecipeGetRandomRecipeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApiRecipe?: shared.BigOvenModelApiRecipe;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
