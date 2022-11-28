import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWorkspacesWorkspacePermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspacePermissionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class GetWorkspacesWorkspacePermissionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetWorkspacesWorkspacePermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkspacesWorkspacePermissionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetWorkspacesWorkspacePermissionsQueryParams;

  @SpeakeasyMetadata()
  security: GetWorkspacesWorkspacePermissionsSecurity;
}


export class GetWorkspacesWorkspacePermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  paginatedWorkspaceMemberships?: shared.PaginatedWorkspaceMemberships;
}
