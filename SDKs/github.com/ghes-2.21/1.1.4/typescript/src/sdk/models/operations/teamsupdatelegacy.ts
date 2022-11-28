import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsUpdateLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum TeamsUpdateLegacyRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}

export enum TeamsUpdateLegacyRequestBodyPrivacyEnum {
    Secret = "secret",
    Closed = "closed"
}


export class TeamsUpdateLegacyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parent_team_id" })
  parentTeamId?: number;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: TeamsUpdateLegacyRequestBodyPermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: TeamsUpdateLegacyRequestBodyPrivacyEnum;
}


export class TeamsUpdateLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsUpdateLegacyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateLegacyRequestBody;
}


export class TeamsUpdateLegacyResponse extends SpeakeasyBase {
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
