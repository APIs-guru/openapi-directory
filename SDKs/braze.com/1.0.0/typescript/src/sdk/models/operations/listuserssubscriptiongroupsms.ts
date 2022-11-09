import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListUserSSubscriptionGroupSmsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=external_id" })
  externalId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=phone" })
  phone?: string;
}


export class ListUserSSubscriptionGroupSmsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListUserSSubscriptionGroupSmsQueryParams;
}


export class ListUserSSubscriptionGroupSmsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
