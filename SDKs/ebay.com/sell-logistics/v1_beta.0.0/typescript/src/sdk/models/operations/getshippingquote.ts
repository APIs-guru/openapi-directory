import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShippingQuotePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shippingQuoteId" })
  shippingQuoteId: string;
}


export class GetShippingQuoteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetShippingQuoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShippingQuotePathParams;

  @SpeakeasyMetadata()
  security: GetShippingQuoteSecurity;
}


export class GetShippingQuoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  shippingQuote?: shared.ShippingQuote;

  @SpeakeasyMetadata()
  statusCode: number;
}
