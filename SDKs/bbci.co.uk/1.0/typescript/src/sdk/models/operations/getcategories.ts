import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: shared.LangEnum;
}


export class GetCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCategoriesQueryParams;
}


export class GetCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ibl?: any;
}
