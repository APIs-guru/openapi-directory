import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateShippingFulfillmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class CreateShippingFulfillmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateShippingFulfillmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateShippingFulfillmentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ShippingFulfillmentDetails;

  @Metadata()
  security: CreateShippingFulfillmentSecurity;
}


export class CreateShippingFulfillmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createShippingFulfillment201ApplicationJsonObject?: Map<string, any>;
}
