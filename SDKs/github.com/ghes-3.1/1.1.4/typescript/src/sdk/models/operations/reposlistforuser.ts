import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposListForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum ReposListForUserDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum ReposListForUserSortEnum {
    Created = "created"
,    Updated = "updated"
,    Pushed = "pushed"
,    FullName = "full_name"
}

export enum ReposListForUserTypeEnum {
    All = "all"
,    Owner = "owner"
,    Member = "member"
}


export class ReposListForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: ReposListForUserDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ReposListForUserSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ReposListForUserTypeEnum;
}


export class ReposListForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposListForUserPathParams;

  @Metadata()
  queryParams: ReposListForUserQueryParams;
}


export class ReposListForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.MinimalRepository })
  minimalRepositories?: shared.MinimalRepository[];
}
