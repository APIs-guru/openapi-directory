import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReviewGetReviewsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class ReviewGetReviewsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class ReviewGetReviewsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReviewGetReviewsPathParams;

  @Metadata()
  queryParams: ReviewGetReviewsQueryParams;
}


export class ReviewGetReviewsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BigOvenModelApiReview })
  bigOvenModelApiReviews?: shared.BigOvenModelApiReview[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
