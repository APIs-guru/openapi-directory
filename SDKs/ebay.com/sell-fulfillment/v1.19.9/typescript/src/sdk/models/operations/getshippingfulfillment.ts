import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShippingFulfillmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fulfillmentId" })
  fulfillmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class GetShippingFulfillmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetShippingFulfillmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShippingFulfillmentPathParams;

  @SpeakeasyMetadata()
  security: GetShippingFulfillmentSecurity;
}


export class GetShippingFulfillmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  shippingFulfillment?: shared.ShippingFulfillment;

  @SpeakeasyMetadata()
  statusCode: number;
}
