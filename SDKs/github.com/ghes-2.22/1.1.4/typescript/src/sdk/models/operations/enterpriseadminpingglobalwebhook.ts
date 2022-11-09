import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminPingGlobalWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;
}


export class EnterpriseAdminPingGlobalWebhookHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class EnterpriseAdminPingGlobalWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminPingGlobalWebhookPathParams;

  @Metadata()
  headers: EnterpriseAdminPingGlobalWebhookHeaders;
}


export class EnterpriseAdminPingGlobalWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
