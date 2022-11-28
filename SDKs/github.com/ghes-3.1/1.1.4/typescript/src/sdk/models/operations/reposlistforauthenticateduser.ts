import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ReposListForAuthenticatedUserDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum ReposListForAuthenticatedUserSortEnum {
    Created = "created",
    Updated = "updated",
    Pushed = "pushed",
    FullName = "full_name"
}

export enum ReposListForAuthenticatedUserTypeEnum {
    All = "all",
    Owner = "owner",
    Public = "public",
    Private = "private",
    Member = "member"
}

export enum ReposListForAuthenticatedUserVisibilityEnum {
    All = "all",
    Public = "public",
    Private = "private"
}


export class ReposListForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=affiliation" })
  affiliation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: ReposListForAuthenticatedUserDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ReposListForAuthenticatedUserSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ReposListForAuthenticatedUserTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=visibility" })
  visibility?: ReposListForAuthenticatedUserVisibilityEnum;
}


export class ReposListForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReposListForAuthenticatedUserQueryParams;
}


export class ReposListForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.Repository })
  repositories?: shared.Repository[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
