import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MessagesGetAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesGetAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeHeaders" })
  includeHeaders?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageIndex" })
  pageIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: Date;
}


export class MessagesGetAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MessagesGetAllPathParams;

  @Metadata()
  queryParams: MessagesGetAllQueryParams;
}


export class MessagesGetAllResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  messagesResult?: shared.MessagesResult;

  @Metadata()
  statusCode: number;
}
