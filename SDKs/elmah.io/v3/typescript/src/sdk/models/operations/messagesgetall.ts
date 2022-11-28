import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MessagesGetAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesGetAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeHeaders" })
  includeHeaders?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageIndex" })
  pageIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: Date;
}


export class MessagesGetAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MessagesGetAllPathParams;

  @SpeakeasyMetadata()
  queryParams: MessagesGetAllQueryParams;
}


export class MessagesGetAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messagesResult?: shared.MessagesResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
