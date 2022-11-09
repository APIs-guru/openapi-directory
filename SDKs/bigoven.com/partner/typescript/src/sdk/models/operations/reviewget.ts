import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReviewGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: number;
}


export class ReviewGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReviewGetPathParams;
}


export class ReviewGetResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApiReview?: shared.BigOvenModelApiReview;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
