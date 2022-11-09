import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeRelatedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class RecipeRelatedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class RecipeRelatedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RecipeRelatedPathParams;

  @Metadata()
  queryParams: RecipeRelatedQueryParams;
}


export class RecipeRelatedResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApi2RecipeSearchResult?: shared.BigOvenModelApi2RecipeSearchResult;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
