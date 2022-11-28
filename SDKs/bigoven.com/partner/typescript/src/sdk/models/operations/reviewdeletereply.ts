import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReviewDeleteReplyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=replyId" })
  replyId: string;
}


export class ReviewDeleteReplyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReviewDeleteReplyPathParams;
}


export class ReviewDeleteReplyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
