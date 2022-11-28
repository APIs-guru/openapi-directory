import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecipeAutoCompleteAllRecipesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class RecipeAutoCompleteAllRecipesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RecipeAutoCompleteAllRecipesQueryParams;
}


export class RecipeAutoCompleteAllRecipesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BigOvenModelRecipeInfoTiny })
  bigOvenModelRecipeInfoTinies?: shared.BigOvenModelRecipeInfoTiny[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
