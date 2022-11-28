import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReviewGetReviewsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class ReviewGetReviewsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class ReviewGetReviewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReviewGetReviewsPathParams;

  @SpeakeasyMetadata()
  queryParams: ReviewGetReviewsQueryParams;
}


export class ReviewGetReviewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BigOvenModelApiReview })
  bigOvenModelApiReviews?: shared.BigOvenModelApiReview[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
