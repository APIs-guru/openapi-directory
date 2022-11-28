import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShippingFulfillmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class GetShippingFulfillmentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetShippingFulfillmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShippingFulfillmentsPathParams;

  @SpeakeasyMetadata()
  security: GetShippingFulfillmentsSecurity;
}


export class GetShippingFulfillmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  shippingFulfillmentPagedCollection?: shared.ShippingFulfillmentPagedCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
