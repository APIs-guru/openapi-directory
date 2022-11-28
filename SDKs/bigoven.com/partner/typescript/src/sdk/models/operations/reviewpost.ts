import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReviewPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class ReviewPostRequests extends SpeakeasyBase {
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


export class ReviewPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReviewPostPathParams;

  @SpeakeasyMetadata()
  request: ReviewPostRequests;
}


export class ReviewPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
