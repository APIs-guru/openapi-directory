import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReviewPutReplyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=replyId" })
  replyId: string;
}


export class ReviewPutReplyRequests extends SpeakeasyBase {
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


export class ReviewPutReplyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReviewPutReplyPathParams;

  @SpeakeasyMetadata()
  request: ReviewPutReplyRequests;
}


export class ReviewPutReplyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApiReply?: shared.BigOvenModelApiReply;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
