import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MessagesCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesCreateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createMessage?: shared.CreateMessage;

  @Metadata({ data: "request, media_type=application/json" })
  createMessage1?: shared.CreateMessage;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  createMessage2?: shared.CreateMessage;

  @Metadata({ data: "request, media_type=text/json" })
  createMessage3?: shared.CreateMessage;
}


export class MessagesCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MessagesCreatePathParams;

  @Metadata()
  request?: MessagesCreateRequests;
}


export class MessagesCreateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  createMessageResult?: shared.CreateMessageResult;

  @Metadata()
  statusCode: number;
}
