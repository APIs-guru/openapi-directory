import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsAddOrUpdateProjectPermissionsLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum {
    Read = "read"
,    Write = "write"
,    Admin = "admin"
}


export class TeamsAddOrUpdateProjectPermissionsLegacyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum;
}


export class TeamsAddOrUpdateProjectPermissionsLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsAddOrUpdateProjectPermissionsLegacyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateProjectPermissionsLegacyRequestBody;
}


export class TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class TeamsAddOrUpdateProjectPermissionsLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  teamsAddOrUpdateProjectPermissionsLegacy403ApplicationJsonObject?: TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson;

  @Metadata()
  teamsAddOrUpdateProjectPermissionsLegacy415ApplicationJsonObject?: TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
