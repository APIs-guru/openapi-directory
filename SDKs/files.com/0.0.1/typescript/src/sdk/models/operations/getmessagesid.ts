import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMessagesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetMessagesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMessagesIdPathParams;
}


export class GetMessagesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messageEntity?: shared.MessageEntity;

  @Metadata()
  statusCode: number;
}
