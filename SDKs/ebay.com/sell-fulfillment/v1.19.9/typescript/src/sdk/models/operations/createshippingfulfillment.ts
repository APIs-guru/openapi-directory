import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateShippingFulfillmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class CreateShippingFulfillmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateShippingFulfillmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateShippingFulfillmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ShippingFulfillmentDetails;

  @SpeakeasyMetadata()
  security: CreateShippingFulfillmentSecurity;
}


export class CreateShippingFulfillmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createShippingFulfillment201ApplicationJsonObject?: Map<string, any>;
}
