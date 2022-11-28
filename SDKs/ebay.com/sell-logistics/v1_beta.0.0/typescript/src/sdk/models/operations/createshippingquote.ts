import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateShippingQuoteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateShippingQuoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ShippingQuoteRequest;

  @SpeakeasyMetadata()
  security: CreateShippingQuoteSecurity;
}


export class CreateShippingQuoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  shippingQuote?: shared.ShippingQuote;

  @SpeakeasyMetadata()
  statusCode: number;
}
