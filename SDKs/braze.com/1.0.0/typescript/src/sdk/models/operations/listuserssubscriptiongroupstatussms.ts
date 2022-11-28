import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListUserSSubscriptionGroupStatusSmsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=external_id" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subscription_group_id" })
  subscriptionGroupId?: string;
}


export class ListUserSSubscriptionGroupStatusSmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListUserSSubscriptionGroupStatusSmsQueryParams;
}


export class ListUserSSubscriptionGroupStatusSmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
