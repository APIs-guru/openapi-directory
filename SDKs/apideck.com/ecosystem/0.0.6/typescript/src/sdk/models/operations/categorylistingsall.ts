import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CategoryListingsAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CategoryListingsAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class CategoryListingsAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CategoryListingsAllPathParams;

  @Metadata()
  queryParams: CategoryListingsAllQueryParams;
}


export class CategoryListingsAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListingsResponse?: shared.GetListingsResponse;

  @Metadata()
  statusCode: number;
}
