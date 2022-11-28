import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomFieldsForWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
  workspaceGid: string;
}


export class GetCustomFieldsForWorkspaceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetCustomFieldsForWorkspace200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.CustomFieldResponse })
  data?: shared.CustomFieldResponse[];
}


export class GetCustomFieldsForWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomFieldsForWorkspacePathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomFieldsForWorkspaceQueryParams;
}


export class GetCustomFieldsForWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomFieldsForWorkspace200ApplicationJsonObject?: GetCustomFieldsForWorkspace200ApplicationJson;
}
