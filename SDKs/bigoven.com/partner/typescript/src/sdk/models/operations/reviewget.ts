import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReviewGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: number;
}


export class ReviewGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReviewGetPathParams;
}


export class ReviewGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApiReview?: shared.BigOvenModelApiReview;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
