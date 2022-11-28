import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrderApiDeleteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class OrderApiDeleteRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  orderDeleteApiModel?: shared.OrderDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  orderDeleteApiModel1?: shared.OrderDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  orderDeleteApiModel2?: shared.OrderDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class OrderApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: OrderApiDeleteHeaders;

  @SpeakeasyMetadata()
  request: OrderApiDeleteRequests;
}


export class OrderApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  orderApiDelete200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  orderApiDelete200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
