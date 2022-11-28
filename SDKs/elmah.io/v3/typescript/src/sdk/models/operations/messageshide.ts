import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MessagesHidePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesHideRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MessagesHidePathParams;
}


export class MessagesHideResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
