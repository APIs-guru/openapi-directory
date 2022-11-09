import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum TeamsCreateRequestBodyPermissionEnum {
    Pull = "pull"
,    Push = "push"
,    Admin = "admin"
}

export enum TeamsCreateRequestBodyPrivacyEnum {
    Secret = "secret"
,    Closed = "closed"
}


export class TeamsCreateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=maintainers" })
  maintainers?: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent_team_id" })
  parentTeamId?: number;

  @Metadata({ data: "json, name=permission" })
  permission?: TeamsCreateRequestBodyPermissionEnum;

  @Metadata({ data: "json, name=privacy" })
  privacy?: TeamsCreateRequestBodyPrivacyEnum;

  @Metadata({ data: "json, name=repo_names" })
  repoNames?: string[];
}


export class TeamsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateRequestBody;
}


export class TeamsCreateResponse extends SpeakeasyBase {
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
