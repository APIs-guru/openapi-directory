import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReviewDeleteReplyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=replyId" })
  replyId: string;
}


export class ReviewDeleteReplyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReviewDeleteReplyPathParams;
}


export class ReviewDeleteReplyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
