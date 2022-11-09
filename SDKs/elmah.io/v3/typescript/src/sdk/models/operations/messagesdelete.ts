import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MessagesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class MessagesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MessagesDeletePathParams;
}


export class MessagesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
