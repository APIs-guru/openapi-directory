import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListUserSSubscriptionGroupSmsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=external_id" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phone" })
  phone?: string;
}


export class ListUserSSubscriptionGroupSmsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListUserSSubscriptionGroupSmsQueryParams;
}


export class ListUserSSubscriptionGroupSmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
