import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRecipeRecipeIdReviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class GetRecipeRecipeIdReviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRecipeRecipeIdReviewPathParams;
}


export class GetRecipeRecipeIdReviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApiReview?: shared.BigOvenModelApiReview;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
