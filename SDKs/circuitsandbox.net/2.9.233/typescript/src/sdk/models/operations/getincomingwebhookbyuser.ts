import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIncomingWebhookByUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetIncomingWebhookByUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchpointer" })
  searchpointer?: string;
}


export class GetIncomingWebhookByUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetIncomingWebhookByUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIncomingWebhookByUserPathParams;

  @Metadata()
  queryParams: GetIncomingWebhookByUserQueryParams;

  @Metadata()
  security: GetIncomingWebhookByUserSecurity;
}


export class GetIncomingWebhookByUserResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  incomingWebhooks?: any[];

  @Metadata()
  statusCode: number;
}
