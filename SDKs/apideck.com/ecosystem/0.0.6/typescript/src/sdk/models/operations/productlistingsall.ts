import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductListingsAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ProductListingsAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class ProductListingsAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProductListingsAllPathParams;

  @SpeakeasyMetadata()
  queryParams: ProductListingsAllQueryParams;
}


export class ProductListingsAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListingsResponse?: shared.GetListingsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
