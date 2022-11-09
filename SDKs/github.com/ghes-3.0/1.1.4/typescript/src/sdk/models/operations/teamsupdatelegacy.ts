import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsUpdateLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum TeamsUpdateLegacyRequestBodyPermissionEnum {
    Pull = "pull"
,    Push = "push"
,    Admin = "admin"
}

export enum TeamsUpdateLegacyRequestBodyPrivacyEnum {
    Secret = "secret"
,    Closed = "closed"
}


export class TeamsUpdateLegacyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent_team_id" })
  parentTeamId?: number;

  @Metadata({ data: "json, name=permission" })
  permission?: TeamsUpdateLegacyRequestBodyPermissionEnum;

  @Metadata({ data: "json, name=privacy" })
  privacy?: TeamsUpdateLegacyRequestBodyPrivacyEnum;
}


export class TeamsUpdateLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsUpdateLegacyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateLegacyRequestBody;
}


export class TeamsUpdateLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  teamFull?: shared.TeamFull;

  @Metadata()
  validationError?: shared.ValidationError;
}
