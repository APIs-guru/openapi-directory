import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMessageReactionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=message_id" })
  messageId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetMessageReactionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMessageReactionsQueryParams;
}


export class GetMessageReactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MessageReactionEntity })
  messageReactionEntities?: shared.MessageReactionEntity[];

  @Metadata()
  statusCode: number;
}
