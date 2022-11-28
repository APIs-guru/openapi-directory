import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFromShippingQuoteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateFromShippingQuoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateShipmentFromQuoteRequest;

  @SpeakeasyMetadata()
  security: CreateFromShippingQuoteSecurity;
}


export class CreateFromShippingQuoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  shipment?: shared.Shipment;

  @SpeakeasyMetadata()
  statusCode: number;
}
