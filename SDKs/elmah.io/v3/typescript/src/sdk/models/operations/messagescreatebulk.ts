import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MessagesCreateBulkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesCreateBulkRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.CreateMessage })
  createMessages?: shared.CreateMessage[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.CreateMessage })
  createMessages1?: shared.CreateMessage[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json", elemType: shared.CreateMessage })
  createMessages2?: shared.CreateMessage[];

  @SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.CreateMessage })
  createMessages3?: shared.CreateMessage[];
}


export class MessagesCreateBulkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MessagesCreateBulkPathParams;

  @SpeakeasyMetadata()
  request?: MessagesCreateBulkRequests;
}


export class MessagesCreateBulkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.CreateBulkMessageResult })
  createBulkMessageResults?: shared.CreateBulkMessageResult[];

  @SpeakeasyMetadata()
  statusCode: number;
}
