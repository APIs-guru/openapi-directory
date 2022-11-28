import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsCheckPermissionsForRepoInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsCheckPermissionsForRepoInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsCheckPermissionsForRepoInOrgPathParams;
}


export class TeamsCheckPermissionsForRepoInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamRepository?: shared.TeamRepository;
}
