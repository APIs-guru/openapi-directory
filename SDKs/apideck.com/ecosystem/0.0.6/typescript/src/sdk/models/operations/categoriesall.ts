import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CategoriesAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;
}


export class CategoriesAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class CategoriesAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CategoriesAllPathParams;

  @Metadata()
  queryParams: CategoriesAllQueryParams;
}


export class CategoriesAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCategoriesResponse?: shared.GetCategoriesResponse;

  @Metadata()
  statusCode: number;
}
