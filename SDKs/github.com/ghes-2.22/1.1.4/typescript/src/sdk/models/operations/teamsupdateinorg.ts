import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsUpdateInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}

export enum TeamsUpdateInOrgRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}

export enum TeamsUpdateInOrgRequestBodyPrivacyEnum {
    Secret = "secret",
    Closed = "closed"
}


export class TeamsUpdateInOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_team_id" })
  parentTeamId?: number;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: TeamsUpdateInOrgRequestBodyPermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: TeamsUpdateInOrgRequestBodyPrivacyEnum;
}


export class TeamsUpdateInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsUpdateInOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateInOrgRequestBody;
}


export class TeamsUpdateInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamFull?: shared.TeamFull;
}
