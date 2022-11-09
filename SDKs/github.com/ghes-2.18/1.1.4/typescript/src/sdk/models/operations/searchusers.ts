import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchUsersSortEnum {
    Followers = "followers"
,    Repositories = "repositories"
,    Joined = "joined"
}


export class SearchUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchUsersSortEnum;
}


export class SearchUsersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchUsersQueryParams;
}


export class SearchUsers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=incomplete_results" })
  incompleteResults: boolean;

  @Metadata({ data: "json, name=items", elemType: shared.UserSearchResultItem })
  items: shared.UserSearchResultItem[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class SearchUsers503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SearchUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  searchUsers200ApplicationJsonObject?: SearchUsers200ApplicationJson;

  @Metadata()
  searchUsers503ApplicationJsonObject?: SearchUsers503ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
