import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInboxRecipientsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_gt" })
  filterGt?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_gteq" })
  filterGteq?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_like" })
  filterLike?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_lt" })
  filterLt?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_lteq" })
  filterLteq?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=inbox_id" })
  inboxId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetInboxRecipientsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetInboxRecipientsQueryParams;
}


export class GetInboxRecipientsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.InboxRecipientEntity })
  inboxRecipientEntities?: shared.InboxRecipientEntity[];

  @Metadata()
  statusCode: number;
}
