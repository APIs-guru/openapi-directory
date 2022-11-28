import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposListForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum ReposListForOrgDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum ReposListForOrgSortEnum {
    Created = "created",
    Updated = "updated",
    Pushed = "pushed",
    FullName = "full_name"
}

export enum ReposListForOrgTypeEnum {
    All = "all",
    Public = "public",
    Private = "private",
    Forks = "forks",
    Sources = "sources",
    Member = "member",
    Internal = "internal"
}


export class ReposListForOrgQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: ReposListForOrgDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ReposListForOrgSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ReposListForOrgTypeEnum;
}


export class ReposListForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposListForOrgPathParams;

  @SpeakeasyMetadata()
  queryParams: ReposListForOrgQueryParams;
}


export class ReposListForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.MinimalRepository })
  minimalRepositories?: shared.MinimalRepository[];
}
