import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTagForWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class CreateTagForWorkspaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateTagForWorkspaceRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TagResponseInput;
}


export class CreateTagForWorkspace201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TagResponse;
}


export class CreateTagForWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateTagForWorkspacePathParams;

  @SpeakeasyMetadata()
  queryParams: CreateTagForWorkspaceQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateTagForWorkspaceRequestBodyInput;
}


export class CreateTagForWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createTagForWorkspace201ApplicationJsonObject?: CreateTagForWorkspace201ApplicationJson;
}
