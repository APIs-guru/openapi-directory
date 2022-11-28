import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecipeRelatedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class RecipeRelatedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class RecipeRelatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecipeRelatedPathParams;

  @SpeakeasyMetadata()
  queryParams: RecipeRelatedQueryParams;
}


export class RecipeRelatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApi2RecipeSearchResult?: shared.BigOvenModelApi2RecipeSearchResult;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
