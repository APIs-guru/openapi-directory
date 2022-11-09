import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfirmPurchasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class ConfirmPurchaseQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ConfirmPurchaseSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class ConfirmPurchaseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfirmPurchasePathParams;

  @Metadata()
  queryParams: ConfirmPurchaseQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvPurchaseRequest;

  @Metadata()
  security: ConfirmPurchaseSecurity;
}


export class ConfirmPurchaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvPurchase?: shared.ItvPurchase;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
