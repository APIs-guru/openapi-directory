import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum TeamsUpdateRequestBodyPermissionEnum {
    Pull = "pull"
,    Push = "push"
,    Admin = "admin"
}

export enum TeamsUpdateRequestBodyPrivacyEnum {
    Secret = "secret"
,    Closed = "closed"
}


export class TeamsUpdateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent_team_id" })
  parentTeamId?: number;

  @Metadata({ data: "json, name=permission" })
  permission?: TeamsUpdateRequestBodyPermissionEnum;

  @Metadata({ data: "json, name=privacy" })
  privacy?: TeamsUpdateRequestBodyPrivacyEnum;
}


export class TeamsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateRequestBody;
}


export class TeamsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamFull?: shared.TeamFull;
}
