import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecipeRavesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class RecipeRavesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RecipeRavesQueryParams;
}


export class RecipeRavesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BigOvenModelRecipeInfoReviewTuple2 })
  bigOvenModelRecipeInfoReviewTuple2s?: shared.BigOvenModelRecipeInfoReviewTuple2[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
