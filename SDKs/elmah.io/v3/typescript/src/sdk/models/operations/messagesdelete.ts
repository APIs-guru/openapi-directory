import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MessagesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MessagesDeletePathParams;
}


export class MessagesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
