import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchCodeSortEnum {
    Indexed = "indexed"
}


export class SearchCodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchCodeSortEnum;
}


export class SearchCode200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=incomplete_results" })
  incompleteResults: boolean;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.CodeSearchResultItem })
  items: shared.CodeSearchResultItem[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class SearchCode503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SearchCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCodeQueryParams;
}


export class SearchCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  searchCode200ApplicationJsonObject?: SearchCode200ApplicationJson;

  @SpeakeasyMetadata()
  searchCode503ApplicationJsonObject?: SearchCode503ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
