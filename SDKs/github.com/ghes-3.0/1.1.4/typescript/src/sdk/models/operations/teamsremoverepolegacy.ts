import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsRemoveRepoLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsRemoveRepoLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsRemoveRepoLegacyPathParams;
}


export class TeamsRemoveRepoLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
