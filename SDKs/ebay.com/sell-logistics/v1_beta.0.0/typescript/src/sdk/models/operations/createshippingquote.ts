import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateShippingQuoteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateShippingQuoteRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ShippingQuoteRequest;

  @Metadata()
  security: CreateShippingQuoteSecurity;
}


export class CreateShippingQuoteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  shippingQuote?: shared.ShippingQuote;

  @Metadata()
  statusCode: number;
}
