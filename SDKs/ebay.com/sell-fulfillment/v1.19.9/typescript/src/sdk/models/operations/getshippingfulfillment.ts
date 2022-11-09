import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShippingFulfillmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fulfillmentId" })
  fulfillmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class GetShippingFulfillmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetShippingFulfillmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetShippingFulfillmentPathParams;

  @Metadata()
  security: GetShippingFulfillmentSecurity;
}


export class GetShippingFulfillmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  shippingFulfillment?: shared.ShippingFulfillment;

  @Metadata()
  statusCode: number;
}
