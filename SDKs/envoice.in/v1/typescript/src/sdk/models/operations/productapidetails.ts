import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductApiDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class ProductApiDetailsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class ProductApiDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ProductApiDetailsQueryParams;

  @Metadata()
  headers: ProductApiDetailsHeaders;
}


export class ProductApiDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  productFullDetailsApiModel?: shared.ProductFullDetailsApiModel;

  @Metadata()
  statusCode: number;
}
