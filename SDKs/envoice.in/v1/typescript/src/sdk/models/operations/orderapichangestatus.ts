import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrderApiChangeStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class OrderApiChangeStatusRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  changeOrderStatusApiModel?: shared.ChangeOrderStatusApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  changeOrderStatusApiModel1?: shared.ChangeOrderStatusApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  changeOrderStatusApiModel2?: shared.ChangeOrderStatusApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class OrderApiChangeStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: OrderApiChangeStatusHeaders;

  @Metadata()
  request: OrderApiChangeStatusRequests;
}


export class OrderApiChangeStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
