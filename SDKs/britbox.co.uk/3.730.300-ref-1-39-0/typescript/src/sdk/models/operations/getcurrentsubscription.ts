import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCurrentSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class GetCurrentSubscriptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetCurrentSubscriptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetCurrentSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCurrentSubscriptionPathParams;

  @Metadata()
  queryParams: GetCurrentSubscriptionQueryParams;

  @Metadata()
  security: GetCurrentSubscriptionSecurity;
}


export class GetCurrentSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvCurrentSubscription?: shared.ItvCurrentSubscription;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
