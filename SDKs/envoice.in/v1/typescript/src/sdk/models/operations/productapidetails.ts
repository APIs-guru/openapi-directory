import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductApiDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class ProductApiDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class ProductApiDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ProductApiDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: ProductApiDetailsHeaders;
}


export class ProductApiDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productFullDetailsApiModel?: shared.ProductFullDetailsApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
