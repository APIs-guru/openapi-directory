import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MessagesFixPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesFixQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=markAllAsFixed" })
  markAllAsFixed?: boolean;
}


export class MessagesFixRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MessagesFixPathParams;

  @SpeakeasyMetadata()
  queryParams: MessagesFixQueryParams;
}


export class MessagesFixResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
