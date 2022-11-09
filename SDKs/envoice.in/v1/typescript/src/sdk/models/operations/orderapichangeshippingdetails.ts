import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrderApiChangeShippingDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=orderId" })
  orderId: number;
}


export class OrderApiChangeShippingDetailsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class OrderApiChangeShippingDetailsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  orderShippingDetailsApiModel?: shared.OrderShippingDetailsApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  orderShippingDetailsApiModel1?: shared.OrderShippingDetailsApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  orderShippingDetailsApiModel2?: shared.OrderShippingDetailsApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class OrderApiChangeShippingDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: OrderApiChangeShippingDetailsQueryParams;

  @Metadata()
  headers: OrderApiChangeShippingDetailsHeaders;

  @Metadata()
  request: OrderApiChangeShippingDetailsRequests;
}


export class OrderApiChangeShippingDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
