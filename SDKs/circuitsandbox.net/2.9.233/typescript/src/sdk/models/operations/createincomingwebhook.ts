import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateIncomingWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversationId" })
  conversationId: string;
}


export class CreateIncomingWebhookQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class CreateIncomingWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateIncomingWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateIncomingWebhookPathParams;

  @Metadata()
  queryParams: CreateIncomingWebhookQueryParams;

  @Metadata()
  security: CreateIncomingWebhookSecurity;
}


export class CreateIncomingWebhookResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  incomingWebhook?: any;

  @Metadata()
  statusCode: number;
}
