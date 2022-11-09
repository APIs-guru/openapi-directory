import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminListGlobalWebhooksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class EnterpriseAdminListGlobalWebhooksHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class EnterpriseAdminListGlobalWebhooksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EnterpriseAdminListGlobalWebhooksQueryParams;

  @Metadata()
  headers: EnterpriseAdminListGlobalWebhooksHeaders;
}


export class EnterpriseAdminListGlobalWebhooksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.GlobalHook })
  globalHooks?: shared.GlobalHook[];
}
