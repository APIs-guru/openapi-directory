import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteItvPurchasePlatformPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class DeleteItvPurchasePlatformQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class DeleteItvPurchasePlatformSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class DeleteItvPurchasePlatformRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteItvPurchasePlatformPathParams;

  @Metadata()
  queryParams: DeleteItvPurchasePlatformQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvCancelSubscriptionRequest;

  @Metadata()
  security: DeleteItvPurchasePlatformSecurity;
}


export class DeleteItvPurchasePlatformResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
