import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class GetOrderQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fieldGroups" })
  fieldGroups?: string;
}


export class GetOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetOrderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrderPathParams;

  @Metadata()
  queryParams: GetOrderQueryParams;

  @Metadata()
  security: GetOrderSecurity;
}


export class GetOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  order?: shared.Order;

  @Metadata()
  statusCode: number;
}
