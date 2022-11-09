import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsUpdateInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}

export enum TeamsUpdateInOrgRequestBodyPermissionEnum {
    Pull = "pull"
,    Push = "push"
,    Admin = "admin"
}

export enum TeamsUpdateInOrgRequestBodyPrivacyEnum {
    Secret = "secret"
,    Closed = "closed"
}


export class TeamsUpdateInOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent_team_id" })
  parentTeamId?: number;

  @Metadata({ data: "json, name=permission" })
  permission?: TeamsUpdateInOrgRequestBodyPermissionEnum;

  @Metadata({ data: "json, name=privacy" })
  privacy?: TeamsUpdateInOrgRequestBodyPrivacyEnum;
}


export class TeamsUpdateInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsUpdateInOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateInOrgRequestBody;
}


export class TeamsUpdateInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamFull?: shared.TeamFull;
}
