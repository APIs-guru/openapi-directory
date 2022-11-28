import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFavoritesForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_gid" })
  userGid: string;
}

export enum GetFavoritesForUserResourceTypeEnum {
    Portfolio = "portfolio",
    Project = "project",
    Tag = "tag",
    Task = "task",
    User = "user"
}


export class GetFavoritesForUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource_type" })
  resourceType: GetFavoritesForUserResourceTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace: string;
}


export class GetFavoritesForUser200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.AsanaNamedResource })
  data?: shared.AsanaNamedResource[];
}


export class GetFavoritesForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFavoritesForUserPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFavoritesForUserQueryParams;
}


export class GetFavoritesForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFavoritesForUser200ApplicationJsonObject?: GetFavoritesForUser200ApplicationJson;
}
