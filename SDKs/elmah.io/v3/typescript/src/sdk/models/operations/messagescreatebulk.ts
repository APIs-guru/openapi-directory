import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MessagesCreateBulkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesCreateBulkRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json", elemType: shared.CreateMessage })
  createMessages?: shared.CreateMessage[];

  @Metadata({ data: "request, media_type=application/json", elemType: shared.CreateMessage })
  createMessages1?: shared.CreateMessage[];

  @Metadata({ data: "request, media_type=application/json-patch+json", elemType: shared.CreateMessage })
  createMessages2?: shared.CreateMessage[];

  @Metadata({ data: "request, media_type=text/json", elemType: shared.CreateMessage })
  createMessages3?: shared.CreateMessage[];
}


export class MessagesCreateBulkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MessagesCreateBulkPathParams;

  @Metadata()
  request?: MessagesCreateBulkRequests;
}


export class MessagesCreateBulkResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CreateBulkMessageResult })
  createBulkMessageResults?: shared.CreateBulkMessageResult[];

  @Metadata()
  statusCode: number;
}
