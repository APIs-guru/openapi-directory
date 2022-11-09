import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReviewPutReplyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=replyId" })
  replyId: string;
}


export class ReviewPutReplyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiReviewControllerPostReplyReq?: shared.Api2ControllersWebApiReviewControllerPostReplyReq;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiReviewControllerPostReplyReq1?: shared.Api2ControllersWebApiReviewControllerPostReplyReq;

  @Metadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiReviewControllerPostReplyReq2?: shared.Api2ControllersWebApiReviewControllerPostReplyReq;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ReviewPutReplyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReviewPutReplyPathParams;

  @Metadata()
  request: ReviewPutReplyRequests;
}


export class ReviewPutReplyResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApiReply?: shared.BigOvenModelApiReply;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
