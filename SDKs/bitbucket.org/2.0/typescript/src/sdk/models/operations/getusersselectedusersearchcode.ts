import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersSelectedUserSearchCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class GetUsersSelectedUserSearchCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagelen" })
  pagelen?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search_query" })
  searchQuery: string;
}


export class GetUsersSelectedUserSearchCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersSelectedUserSearchCodePathParams;

  @Metadata()
  queryParams: GetUsersSelectedUserSearchCodeQueryParams;
}


export class GetUsersSelectedUserSearchCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  searchResultPage?: shared.SearchResultPage;
}
