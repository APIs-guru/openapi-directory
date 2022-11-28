import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminListGlobalWebhooksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class EnterpriseAdminListGlobalWebhooksHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class EnterpriseAdminListGlobalWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EnterpriseAdminListGlobalWebhooksQueryParams;

  @SpeakeasyMetadata()
  headers: EnterpriseAdminListGlobalWebhooksHeaders;
}


export class EnterpriseAdminListGlobalWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.GlobalHook })
  globalHooks?: shared.GlobalHook[];
}
