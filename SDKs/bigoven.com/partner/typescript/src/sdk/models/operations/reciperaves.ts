import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeRavesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class RecipeRavesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RecipeRavesQueryParams;
}


export class RecipeRavesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BigOvenModelRecipeInfoReviewTuple2 })
  bigOvenModelRecipeInfoReviewTuple2s?: shared.BigOvenModelRecipeInfoReviewTuple2[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
