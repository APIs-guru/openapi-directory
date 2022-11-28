import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrderApiDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class OrderApiDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class OrderApiDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: OrderApiDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: OrderApiDetailsHeaders;
}


export class OrderApiDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  orderFullDetailsApiModel?: shared.OrderFullDetailsApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
