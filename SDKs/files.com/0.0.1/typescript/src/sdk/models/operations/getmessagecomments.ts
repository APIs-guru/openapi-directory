import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMessageCommentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=message_id" })
  messageId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetMessageCommentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMessageCommentsQueryParams;
}


export class GetMessageCommentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MessageCommentEntity })
  messageCommentEntities?: shared.MessageCommentEntity[];

  @Metadata()
  statusCode: number;
}
