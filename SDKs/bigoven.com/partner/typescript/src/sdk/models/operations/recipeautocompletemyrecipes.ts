import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeAutoCompleteMyRecipesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class RecipeAutoCompleteMyRecipesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RecipeAutoCompleteMyRecipesQueryParams;
}


export class RecipeAutoCompleteMyRecipesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BigOvenModelRecipeInfoTiny })
  bigOvenModelRecipeInfoTinies?: shared.BigOvenModelRecipeInfoTiny[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
