import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchUsersSortEnum {
    Followers = "followers",
    Repositories = "repositories",
    Joined = "joined"
}


export class SearchUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchUsersSortEnum;
}


export class SearchUsers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=incomplete_results" })
  incompleteResults: boolean;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.UserSearchResultItem })
  items: shared.UserSearchResultItem[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class SearchUsers503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SearchUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchUsersQueryParams;
}


export class SearchUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  searchUsers200ApplicationJsonObject?: SearchUsers200ApplicationJson;

  @SpeakeasyMetadata()
  searchUsers503ApplicationJsonObject?: SearchUsers503ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
