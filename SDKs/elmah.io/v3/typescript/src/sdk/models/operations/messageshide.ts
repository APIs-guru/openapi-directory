import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MessagesHidePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesHideRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MessagesHidePathParams;
}


export class MessagesHideResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
