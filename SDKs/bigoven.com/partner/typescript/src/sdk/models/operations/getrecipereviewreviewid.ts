import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRecipeReviewReviewIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class GetRecipeReviewReviewIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRecipeReviewReviewIdPathParams;
}


export class GetRecipeReviewReviewIdResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApiReview?: shared.BigOvenModelApiReview;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
