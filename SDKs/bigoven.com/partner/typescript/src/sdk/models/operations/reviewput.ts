import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReviewPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class ReviewPutRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiReviewControllerReviewRequest?: shared.Api2ControllersWebApiReviewControllerReviewRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiReviewControllerReviewRequest1?: shared.Api2ControllersWebApiReviewControllerReviewRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiReviewControllerReviewRequest2?: shared.Api2ControllersWebApiReviewControllerReviewRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ReviewPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReviewPutPathParams;

  @SpeakeasyMetadata()
  request: ReviewPutRequests;
}


export class ReviewPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApiReview?: shared.BigOvenModelApiReview;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
