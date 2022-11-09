import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRecipeRecipeIdReviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class GetRecipeRecipeIdReviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRecipeRecipeIdReviewPathParams;
}


export class GetRecipeRecipeIdReviewResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApiReview?: shared.BigOvenModelApiReview;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
