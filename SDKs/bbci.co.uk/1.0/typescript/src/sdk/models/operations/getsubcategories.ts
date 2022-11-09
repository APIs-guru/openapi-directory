import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubCategoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}


export class GetSubCategoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: shared.LangEnum;
}


export class GetSubCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubCategoriesPathParams;

  @Metadata()
  queryParams: GetSubCategoriesQueryParams;
}


export class GetSubCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
