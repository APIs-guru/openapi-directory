import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfirmPurchaseWithOfferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class ConfirmPurchaseWithOfferQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ConfirmPurchaseWithOfferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class ConfirmPurchaseWithOfferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfirmPurchaseWithOfferPathParams;

  @Metadata()
  queryParams: ConfirmPurchaseWithOfferQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvPurchaseWithOfferRequest;

  @Metadata()
  security: ConfirmPurchaseWithOfferSecurity;
}


export class ConfirmPurchaseWithOfferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvPurchaseWithOfferResponse?: shared.ItvPurchaseWithOfferResponse;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
