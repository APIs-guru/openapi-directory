import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class SearchAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagelen" })
  pagelen?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_query" })
  searchQuery: string;
}


export class SearchAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SearchAccountPathParams;

  @SpeakeasyMetadata()
  queryParams: SearchAccountQueryParams;
}


export class SearchAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  searchResultPage?: shared.SearchResultPage;
}
