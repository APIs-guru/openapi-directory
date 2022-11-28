import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposListForksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReposListForksSortEnum {
    Newest = "newest",
    Oldest = "oldest",
    Stargazers = "stargazers",
    Watchers = "watchers"
}


export class ReposListForksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org" })
  org?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ReposListForksSortEnum;
}


export class ReposListForksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposListForksPathParams;

  @SpeakeasyMetadata()
  queryParams: ReposListForksQueryParams;
}


export class ReposListForksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.MinimalRepository })
  minimalRepositories?: shared.MinimalRepository[];

  @SpeakeasyMetadata()
  scimError?: shared.ScimError;
}
