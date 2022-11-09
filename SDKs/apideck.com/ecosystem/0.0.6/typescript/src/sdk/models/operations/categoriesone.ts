import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CategoriesOnePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CategoriesOneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CategoriesOnePathParams;
}


export class CategoriesOneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCategoryResponse?: shared.GetCategoryResponse;

  @Metadata()
  statusCode: number;
}
