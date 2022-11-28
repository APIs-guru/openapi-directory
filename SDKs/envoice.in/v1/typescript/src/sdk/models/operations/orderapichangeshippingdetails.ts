import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrderApiChangeShippingDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderId" })
  orderId: number;
}


export class OrderApiChangeShippingDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class OrderApiChangeShippingDetailsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  orderShippingDetailsApiModel?: shared.OrderShippingDetailsApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  orderShippingDetailsApiModel1?: shared.OrderShippingDetailsApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  orderShippingDetailsApiModel2?: shared.OrderShippingDetailsApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class OrderApiChangeShippingDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: OrderApiChangeShippingDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: OrderApiChangeShippingDetailsHeaders;

  @SpeakeasyMetadata()
  request: OrderApiChangeShippingDetailsRequests;
}


export class OrderApiChangeShippingDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
