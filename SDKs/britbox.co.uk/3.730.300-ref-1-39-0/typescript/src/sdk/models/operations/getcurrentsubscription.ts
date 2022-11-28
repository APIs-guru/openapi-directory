import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCurrentSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class GetCurrentSubscriptionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetCurrentSubscriptionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetCurrentSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCurrentSubscriptionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCurrentSubscriptionQueryParams;

  @SpeakeasyMetadata()
  security: GetCurrentSubscriptionSecurity;
}


export class GetCurrentSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvCurrentSubscription?: shared.ItvCurrentSubscription;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
