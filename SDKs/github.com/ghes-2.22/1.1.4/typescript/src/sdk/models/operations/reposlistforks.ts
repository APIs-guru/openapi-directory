import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposListForksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposListForksSortEnum {
    Newest = "newest"
,    Oldest = "oldest"
,    Stargazers = "stargazers"
,    Watchers = "watchers"
}


export class ReposListForksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ReposListForksSortEnum;
}


export class ReposListForksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposListForksPathParams;

  @Metadata()
  queryParams: ReposListForksQueryParams;
}


export class ReposListForksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.MinimalRepository })
  minimalRepositories?: shared.MinimalRepository[];

  @Metadata()
  scimError?: shared.ScimError;
}
