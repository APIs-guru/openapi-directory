import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeAutoCompleteAllRecipesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class RecipeAutoCompleteAllRecipesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RecipeAutoCompleteAllRecipesQueryParams;
}


export class RecipeAutoCompleteAllRecipesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BigOvenModelRecipeInfoTiny })
  bigOvenModelRecipeInfoTinies?: shared.BigOvenModelRecipeInfoTiny[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
