import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductApiAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.page" })
  queryOptionsPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.pageSize" })
  queryOptionsPageSize?: number;
}


export class ProductApiAllHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class ProductApiAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ProductApiAllQueryParams;

  @SpeakeasyMetadata()
  headers: ProductApiAllHeaders;
}


export class ProductApiAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listResultProductDetailsApiModel?: shared.ListResultProductDetailsApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
