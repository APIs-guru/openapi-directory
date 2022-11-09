import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3OrdersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV3OrdersIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3OrdersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV3OrdersIdPathParams;

  @Metadata()
  headers: GetV3OrdersIdHeaders;
}


export class GetV3OrdersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  orderDetail?: shared.OrderDetail;

  @Metadata()
  statusCode: number;
}
