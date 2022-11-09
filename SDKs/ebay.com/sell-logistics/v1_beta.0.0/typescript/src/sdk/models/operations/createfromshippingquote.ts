import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFromShippingQuoteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateFromShippingQuoteRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateShipmentFromQuoteRequest;

  @Metadata()
  security: CreateFromShippingQuoteSecurity;
}


export class CreateFromShippingQuoteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  shipment?: shared.Shipment;

  @Metadata()
  statusCode: number;
}
