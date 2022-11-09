import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposListForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum ReposListForOrgDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum ReposListForOrgSortEnum {
    Created = "created"
,    Updated = "updated"
,    Pushed = "pushed"
,    FullName = "full_name"
}

export enum ReposListForOrgTypeEnum {
    All = "all"
,    Public = "public"
,    Private = "private"
,    Forks = "forks"
,    Sources = "sources"
,    Member = "member"
,    Internal = "internal"
}


export class ReposListForOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: ReposListForOrgDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ReposListForOrgSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ReposListForOrgTypeEnum;
}


export class ReposListForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposListForOrgPathParams;

  @Metadata()
  queryParams: ReposListForOrgQueryParams;
}


export class ReposListForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.MinimalRepository })
  minimalRepositories?: shared.MinimalRepository[];
}
