import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfirmPurchaseWithOfferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class ConfirmPurchaseWithOfferQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ConfirmPurchaseWithOfferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class ConfirmPurchaseWithOfferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfirmPurchaseWithOfferPathParams;

  @SpeakeasyMetadata()
  queryParams: ConfirmPurchaseWithOfferQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItvPurchaseWithOfferRequest;

  @SpeakeasyMetadata()
  security: ConfirmPurchaseWithOfferSecurity;
}


export class ConfirmPurchaseWithOfferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvPurchaseWithOfferResponse?: shared.ItvPurchaseWithOfferResponse;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
