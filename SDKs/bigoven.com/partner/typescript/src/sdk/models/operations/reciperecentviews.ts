import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecipeRecentViewsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class RecipeRecentViewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RecipeRecentViewsQueryParams;
}


export class RecipeRecentViewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BigOvenModelRecipeInfoDateTuple2 })
  bigOvenModelRecipeInfoDateTuple2s?: shared.BigOvenModelRecipeInfoDateTuple2[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
