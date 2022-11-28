import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3OrdersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV3OrdersIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3OrdersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV3OrdersIdPathParams;

  @SpeakeasyMetadata()
  headers: GetV3OrdersIdHeaders;
}


export class GetV3OrdersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  orderDetail?: shared.OrderDetail;

  @SpeakeasyMetadata()
  statusCode: number;
}
