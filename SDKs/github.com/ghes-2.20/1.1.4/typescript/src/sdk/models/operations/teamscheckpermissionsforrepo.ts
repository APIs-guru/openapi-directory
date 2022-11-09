import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsCheckPermissionsForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCheckPermissionsForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsCheckPermissionsForRepoPathParams;
}


export class TeamsCheckPermissionsForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  fullRepository?: shared.FullRepository;

  @Metadata()
  minimalRepository?: shared.MinimalRepository;
}
