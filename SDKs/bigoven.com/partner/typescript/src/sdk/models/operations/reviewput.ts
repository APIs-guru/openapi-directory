import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReviewPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class ReviewPutRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiReviewControllerReviewRequest?: shared.Api2ControllersWebApiReviewControllerReviewRequest;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiReviewControllerReviewRequest1?: shared.Api2ControllersWebApiReviewControllerReviewRequest;

  @Metadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiReviewControllerReviewRequest2?: shared.Api2ControllersWebApiReviewControllerReviewRequest;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ReviewPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReviewPutPathParams;

  @Metadata()
  request: ReviewPutRequests;
}


export class ReviewPutResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApiReview?: shared.BigOvenModelApiReview;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
