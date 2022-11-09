import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class SearchAccountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagelen" })
  pagelen?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search_query" })
  searchQuery: string;
}


export class SearchAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchAccountPathParams;

  @Metadata()
  queryParams: SearchAccountQueryParams;
}


export class SearchAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  searchResultPage?: shared.SearchResultPage;
}
