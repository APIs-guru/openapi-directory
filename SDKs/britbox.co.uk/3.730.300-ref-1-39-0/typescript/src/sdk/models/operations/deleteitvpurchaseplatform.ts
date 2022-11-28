import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteItvPurchasePlatformPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class DeleteItvPurchasePlatformQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class DeleteItvPurchasePlatformSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class DeleteItvPurchasePlatformRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteItvPurchasePlatformPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteItvPurchasePlatformQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItvCancelSubscriptionRequest;

  @SpeakeasyMetadata()
  security: DeleteItvPurchasePlatformSecurity;
}


export class DeleteItvPurchasePlatformResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
