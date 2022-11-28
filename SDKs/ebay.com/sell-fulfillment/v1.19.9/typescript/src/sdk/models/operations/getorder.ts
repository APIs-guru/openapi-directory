import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class GetOrderQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldGroups" })
  fieldGroups?: string;
}


export class GetOrderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrderPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOrderQueryParams;

  @SpeakeasyMetadata()
  security: GetOrderSecurity;
}


export class GetOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  order?: shared.Order;

  @SpeakeasyMetadata()
  statusCode: number;
}
