import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductListingsAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ProductListingsAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class ProductListingsAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProductListingsAllPathParams;

  @Metadata()
  queryParams: ProductListingsAllQueryParams;
}


export class ProductListingsAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListingsResponse?: shared.GetListingsResponse;

  @Metadata()
  statusCode: number;
}
