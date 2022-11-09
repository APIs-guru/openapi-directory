import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MessagesFixPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesFixQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=markAllAsFixed" })
  markAllAsFixed?: boolean;
}


export class MessagesFixRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MessagesFixPathParams;

  @Metadata()
  queryParams: MessagesFixQueryParams;
}


export class MessagesFixResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
