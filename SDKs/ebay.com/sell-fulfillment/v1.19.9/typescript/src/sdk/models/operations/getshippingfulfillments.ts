import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShippingFulfillmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class GetShippingFulfillmentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetShippingFulfillmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetShippingFulfillmentsPathParams;

  @Metadata()
  security: GetShippingFulfillmentsSecurity;
}


export class GetShippingFulfillmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  shippingFulfillmentPagedCollection?: shared.ShippingFulfillmentPagedCollection;

  @Metadata()
  statusCode: number;
}
