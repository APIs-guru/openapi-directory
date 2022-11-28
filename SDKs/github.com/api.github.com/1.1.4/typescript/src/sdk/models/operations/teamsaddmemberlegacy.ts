import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsAddMemberLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsAddMemberLegacy422ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}


export class TeamsAddMemberLegacy422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: TeamsAddMemberLegacy422ApplicationJsonErrors })
  errors?: TeamsAddMemberLegacy422ApplicationJsonErrors[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class TeamsAddMemberLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsAddMemberLegacyPathParams;
}


export class TeamsAddMemberLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  teamsAddMemberLegacy422ApplicationJsonObject?: TeamsAddMemberLegacy422ApplicationJson;
}
