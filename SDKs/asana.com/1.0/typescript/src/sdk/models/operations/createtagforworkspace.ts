import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTagForWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class CreateTagForWorkspaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateTagForWorkspaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TagResponse;
}


export class CreateTagForWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateTagForWorkspacePathParams;

  @Metadata()
  queryParams: CreateTagForWorkspaceQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateTagForWorkspaceRequestBody;
}


export class CreateTagForWorkspace201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TagResponse;
}


export class CreateTagForWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createTagForWorkspace201ApplicationJsonObject?: CreateTagForWorkspace201ApplicationJson;
}
