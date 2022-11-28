import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReviewPostReplyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class ReviewPostReplyRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiReviewControllerPostReplyReq?: shared.Api2ControllersWebApiReviewControllerPostReplyReq;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiReviewControllerPostReplyReq1?: shared.Api2ControllersWebApiReviewControllerPostReplyReq;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiReviewControllerPostReplyReq2?: shared.Api2ControllersWebApiReviewControllerPostReplyReq;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ReviewPostReplyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReviewPostReplyPathParams;

  @SpeakeasyMetadata()
  request: ReviewPostReplyRequests;
}


export class ReviewPostReplyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApiReply?: shared.BigOvenModelApiReply;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
