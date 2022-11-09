import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeRecentViewsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class RecipeRecentViewsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RecipeRecentViewsQueryParams;
}


export class RecipeRecentViewsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BigOvenModelRecipeInfoDateTuple2 })
  bigOvenModelRecipeInfoDateTuple2s?: shared.BigOvenModelRecipeInfoDateTuple2[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
