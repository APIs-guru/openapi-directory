import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMessageReactionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetMessageReactionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMessageReactionsIdPathParams;
}


export class GetMessageReactionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messageReactionEntity?: shared.MessageReactionEntity;

  @Metadata()
  statusCode: number;
}
