import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum TeamsUpdateRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push",
    Admin = "admin"
}

export enum TeamsUpdateRequestBodyPrivacyEnum {
    Secret = "secret",
    Closed = "closed"
}


export class TeamsUpdateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_team_id" })
  parentTeamId?: number;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: TeamsUpdateRequestBodyPermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: TeamsUpdateRequestBodyPrivacyEnum;
}


export class TeamsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateRequestBody;
}


export class TeamsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamFull?: shared.TeamFull;
}
