import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CategoriesOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CategoriesOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CategoriesOnePathParams;
}


export class CategoriesOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCategoryResponse?: shared.GetCategoryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
