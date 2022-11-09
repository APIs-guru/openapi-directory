import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrderApiDeleteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class OrderApiDeleteRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  orderDeleteApiModel?: shared.OrderDeleteApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  orderDeleteApiModel1?: shared.OrderDeleteApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  orderDeleteApiModel2?: shared.OrderDeleteApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class OrderApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  headers: OrderApiDeleteHeaders;

  @Metadata()
  request: OrderApiDeleteRequests;
}


export class OrderApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  orderApiDelete200ApplicationJsonInt32Integer?: number;

  @Metadata()
  orderApiDelete200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
