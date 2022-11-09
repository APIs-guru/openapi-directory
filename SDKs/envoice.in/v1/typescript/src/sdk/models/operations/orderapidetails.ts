import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrderApiDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class OrderApiDetailsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class OrderApiDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: OrderApiDetailsQueryParams;

  @Metadata()
  headers: OrderApiDetailsHeaders;
}


export class OrderApiDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  orderFullDetailsApiModel?: shared.OrderFullDetailsApiModel;

  @Metadata()
  statusCode: number;
}
