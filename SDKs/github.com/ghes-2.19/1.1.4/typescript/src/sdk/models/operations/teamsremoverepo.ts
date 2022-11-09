import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsRemoveRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsRemoveRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsRemoveRepoPathParams;
}


export class TeamsRemoveRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
