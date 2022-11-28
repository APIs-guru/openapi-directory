import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MessagesCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createMessage?: shared.CreateMessage;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createMessage1?: shared.CreateMessage;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  createMessage2?: shared.CreateMessage;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createMessage3?: shared.CreateMessage;
}


export class MessagesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MessagesCreatePathParams;

  @SpeakeasyMetadata()
  request?: MessagesCreateRequests;
}


export class MessagesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createMessageResult?: shared.CreateMessageResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
