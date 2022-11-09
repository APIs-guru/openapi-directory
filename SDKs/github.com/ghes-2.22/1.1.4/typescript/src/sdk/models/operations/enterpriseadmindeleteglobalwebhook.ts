import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminDeleteGlobalWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;
}


export class EnterpriseAdminDeleteGlobalWebhookHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class EnterpriseAdminDeleteGlobalWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminDeleteGlobalWebhookPathParams;

  @Metadata()
  headers: EnterpriseAdminDeleteGlobalWebhookHeaders;
}


export class EnterpriseAdminDeleteGlobalWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
