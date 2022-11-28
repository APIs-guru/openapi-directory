import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrderApiAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.page" })
  queryOptionsPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.pageSize" })
  queryOptionsPageSize?: number;
}


export class OrderApiAllHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class OrderApiAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: OrderApiAllQueryParams;

  @SpeakeasyMetadata()
  headers: OrderApiAllHeaders;
}


export class OrderApiAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listResultOrderDetailsApiModel?: shared.ListResultOrderDetailsApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
