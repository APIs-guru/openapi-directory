import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIncomingWebhookByUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetIncomingWebhookByUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchpointer" })
  searchpointer?: string;
}


export class GetIncomingWebhookByUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetIncomingWebhookByUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIncomingWebhookByUserPathParams;

  @SpeakeasyMetadata()
  queryParams: GetIncomingWebhookByUserQueryParams;

  @SpeakeasyMetadata()
  security: GetIncomingWebhookByUserSecurity;
}


export class GetIncomingWebhookByUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  incomingWebhooks?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
