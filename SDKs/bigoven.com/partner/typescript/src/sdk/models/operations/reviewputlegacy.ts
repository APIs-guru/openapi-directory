import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReviewPutLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: number;
}


export class ReviewPutLegacyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiReviewControllerReviewRequestLegacy?: shared.Api2ControllersWebApiReviewControllerReviewRequestLegacy;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiReviewControllerReviewRequestLegacy1?: shared.Api2ControllersWebApiReviewControllerReviewRequestLegacy;

  @Metadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiReviewControllerReviewRequestLegacy2?: shared.Api2ControllersWebApiReviewControllerReviewRequestLegacy;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ReviewPutLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReviewPutLegacyPathParams;

  @Metadata()
  request: ReviewPutLegacyRequests;
}


export class ReviewPutLegacyResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApiReview?: shared.BigOvenModelApiReview;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
