import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReviewPutLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: number;
}


export class ReviewPutLegacyRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiReviewControllerReviewRequestLegacy?: shared.Api2ControllersWebApiReviewControllerReviewRequestLegacy;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiReviewControllerReviewRequestLegacy1?: shared.Api2ControllersWebApiReviewControllerReviewRequestLegacy;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiReviewControllerReviewRequestLegacy2?: shared.Api2ControllersWebApiReviewControllerReviewRequestLegacy;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ReviewPutLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReviewPutLegacyPathParams;

  @SpeakeasyMetadata()
  request: ReviewPutLegacyRequests;
}


export class ReviewPutLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApiReview?: shared.BigOvenModelApiReview;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
