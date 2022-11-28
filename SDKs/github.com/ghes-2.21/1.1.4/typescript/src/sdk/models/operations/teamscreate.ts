import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum TeamsCreateRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}

export enum TeamsCreateRequestBodyPrivacyEnum {
    Secret = "secret",
    Closed = "closed"
}


export class TeamsCreateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=maintainers" })
  maintainers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parent_team_id" })
  parentTeamId?: number;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: TeamsCreateRequestBodyPermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: TeamsCreateRequestBodyPrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=repo_names" })
  repoNames?: string[];
}


export class TeamsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateRequestBody;
}


export class TeamsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  teamFull?: shared.TeamFull;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
