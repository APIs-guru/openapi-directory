import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CategoriesAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;
}


export class CategoriesAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class CategoriesAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CategoriesAllPathParams;

  @SpeakeasyMetadata()
  queryParams: CategoriesAllQueryParams;
}


export class CategoriesAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCategoriesResponse?: shared.GetCategoriesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
