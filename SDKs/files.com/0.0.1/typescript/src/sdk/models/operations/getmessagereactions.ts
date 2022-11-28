import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMessageReactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=message_id" })
  messageId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetMessageReactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMessageReactionsQueryParams;
}


export class GetMessageReactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MessageReactionEntity })
  messageReactionEntities?: shared.MessageReactionEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
