import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRecipeReviewReviewIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class GetRecipeReviewReviewIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRecipeReviewReviewIdPathParams;
}


export class GetRecipeReviewReviewIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApiReview?: shared.BigOvenModelApiReview;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
