import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrderApiChangeStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class OrderApiChangeStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  changeOrderStatusApiModel?: shared.ChangeOrderStatusApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  changeOrderStatusApiModel1?: shared.ChangeOrderStatusApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  changeOrderStatusApiModel2?: shared.ChangeOrderStatusApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class OrderApiChangeStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: OrderApiChangeStatusHeaders;

  @SpeakeasyMetadata()
  request: OrderApiChangeStatusRequests;
}


export class OrderApiChangeStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
