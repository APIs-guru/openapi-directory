import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsAddOrUpdateProjectPermissionsLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}


export class TeamsAddOrUpdateProjectPermissionsLegacyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum;
}


export class TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class TeamsAddOrUpdateProjectPermissionsLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsAddOrUpdateProjectPermissionsLegacyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsAddOrUpdateProjectPermissionsLegacyRequestBody;
}


export class TeamsAddOrUpdateProjectPermissionsLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  teamsAddOrUpdateProjectPermissionsLegacy403ApplicationJsonObject?: TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson;

  @SpeakeasyMetadata()
  teamsAddOrUpdateProjectPermissionsLegacy415ApplicationJsonObject?: TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
