import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateIncomingWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversationId" })
  conversationId: string;
}


export class CreateIncomingWebhookQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class CreateIncomingWebhookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateIncomingWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateIncomingWebhookPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateIncomingWebhookQueryParams;

  @SpeakeasyMetadata()
  security: CreateIncomingWebhookSecurity;
}


export class CreateIncomingWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  incomingWebhook?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
