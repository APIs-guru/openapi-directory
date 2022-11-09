import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFavoritesForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_gid" })
  userGid: string;
}

export enum GetFavoritesForUserResourceTypeEnum {
    Portfolio = "portfolio"
,    Project = "project"
,    Tag = "tag"
,    Task = "task"
,    User = "user"
}


export class GetFavoritesForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resource_type" })
  resourceType: GetFavoritesForUserResourceTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace: string;
}


export class GetFavoritesForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFavoritesForUserPathParams;

  @Metadata()
  queryParams: GetFavoritesForUserQueryParams;
}


export class GetFavoritesForUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.AsanaNamedResource })
  data?: shared.AsanaNamedResource[];
}


export class GetFavoritesForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getFavoritesForUser200ApplicationJsonObject?: GetFavoritesForUser200ApplicationJson;
}
