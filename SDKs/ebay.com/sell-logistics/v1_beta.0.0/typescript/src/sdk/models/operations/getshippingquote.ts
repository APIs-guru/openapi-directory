import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShippingQuotePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shippingQuoteId" })
  shippingQuoteId: string;
}


export class GetShippingQuoteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetShippingQuoteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetShippingQuotePathParams;

  @Metadata()
  security: GetShippingQuoteSecurity;
}


export class GetShippingQuoteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  shippingQuote?: shared.ShippingQuote;

  @Metadata()
  statusCode: number;
}
