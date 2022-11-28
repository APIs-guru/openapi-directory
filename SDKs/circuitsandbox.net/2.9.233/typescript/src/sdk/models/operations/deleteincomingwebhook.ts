import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteIncomingWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class DeleteIncomingWebhookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteIncomingWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteIncomingWebhookPathParams;

  @SpeakeasyMetadata()
  security: DeleteIncomingWebhookSecurity;
}


export class DeleteIncomingWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
