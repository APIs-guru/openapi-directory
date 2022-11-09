import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListUserSSubscriptionGroupStatusSmsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=external_id" })
  externalId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=phone" })
  phone?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subscription_group_id" })
  subscriptionGroupId?: string;
}


export class ListUserSSubscriptionGroupStatusSmsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListUserSSubscriptionGroupStatusSmsQueryParams;
}


export class ListUserSSubscriptionGroupStatusSmsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
