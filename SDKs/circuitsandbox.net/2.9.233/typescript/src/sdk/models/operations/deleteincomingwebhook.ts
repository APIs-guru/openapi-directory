import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteIncomingWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class DeleteIncomingWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteIncomingWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteIncomingWebhookPathParams;

  @Metadata()
  security: DeleteIncomingWebhookSecurity;
}


export class DeleteIncomingWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
