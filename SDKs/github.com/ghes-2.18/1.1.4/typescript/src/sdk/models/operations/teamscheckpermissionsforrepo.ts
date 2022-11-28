import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsCheckPermissionsForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCheckPermissionsForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsCheckPermissionsForRepoPathParams;
}


export class TeamsCheckPermissionsForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  fullRepository?: shared.FullRepository;

  @SpeakeasyMetadata()
  minimalRepository?: shared.MinimalRepository;
}
