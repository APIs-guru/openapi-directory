import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersSelectedUserSearchCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class GetUsersSelectedUserSearchCodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagelen" })
  pagelen?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_query" })
  searchQuery: string;
}


export class GetUsersSelectedUserSearchCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersSelectedUserSearchCodePathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersSelectedUserSearchCodeQueryParams;
}


export class GetUsersSelectedUserSearchCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  searchResultPage?: shared.SearchResultPage;
}
