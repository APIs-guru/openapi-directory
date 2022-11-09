import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsAddMemberLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class TeamsAddMemberLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsAddMemberLegacyPathParams;
}


export class TeamsAddMemberLegacy422ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}


export class TeamsAddMemberLegacy422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=errors", elemType: operations.TeamsAddMemberLegacy422ApplicationJsonErrors })
  errors?: TeamsAddMemberLegacy422ApplicationJsonErrors[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class TeamsAddMemberLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  teamsAddMemberLegacy422ApplicationJsonObject?: TeamsAddMemberLegacy422ApplicationJson;
}
