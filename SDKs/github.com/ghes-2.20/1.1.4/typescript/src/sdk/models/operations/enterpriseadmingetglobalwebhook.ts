import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminGetGlobalWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;
}


export class EnterpriseAdminGetGlobalWebhookHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class EnterpriseAdminGetGlobalWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminGetGlobalWebhookPathParams;

  @Metadata()
  headers: EnterpriseAdminGetGlobalWebhookHeaders;
}


export class EnterpriseAdminGetGlobalWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  globalHook?: shared.GlobalHook;
}
