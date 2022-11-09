import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class DeleteWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWebhookPathParams;

  @Metadata()
  security: DeleteWebhookSecurity;
}


export class DeleteWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;
}
