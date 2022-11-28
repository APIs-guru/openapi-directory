import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposListForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum ReposListForUserDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum ReposListForUserSortEnum {
    Created = "created",
    Updated = "updated",
    Pushed = "pushed",
    FullName = "full_name"
}

export enum ReposListForUserTypeEnum {
    All = "all",
    Owner = "owner",
    Member = "member"
}


export class ReposListForUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: ReposListForUserDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ReposListForUserSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ReposListForUserTypeEnum;
}


export class ReposListForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposListForUserPathParams;

  @SpeakeasyMetadata()
  queryParams: ReposListForUserQueryParams;
}


export class ReposListForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.MinimalRepository })
  minimalRepositories?: shared.MinimalRepository[];
}
