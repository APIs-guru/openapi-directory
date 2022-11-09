import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ReposListForAuthenticatedUserDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum ReposListForAuthenticatedUserSortEnum {
    Created = "created"
,    Updated = "updated"
,    Pushed = "pushed"
,    FullName = "full_name"
}

export enum ReposListForAuthenticatedUserTypeEnum {
    All = "all"
,    Owner = "owner"
,    Public = "public"
,    Private = "private"
,    Member = "member"
}

export enum ReposListForAuthenticatedUserVisibilityEnum {
    All = "all"
,    Public = "public"
,    Private = "private"
}


export class ReposListForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=affiliation" })
  affiliation?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: ReposListForAuthenticatedUserDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ReposListForAuthenticatedUserSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ReposListForAuthenticatedUserTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=visibility" })
  visibility?: ReposListForAuthenticatedUserVisibilityEnum;
}


export class ReposListForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ReposListForAuthenticatedUserQueryParams;
}


export class ReposListForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Repository })
  repositories?: shared.Repository[];

  @Metadata()
  validationError?: shared.ValidationError;
}
