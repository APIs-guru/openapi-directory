import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposSetTeamAccessRestrictionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposSetTeamAccessRestrictionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=teams" })
  teams: string[];
}


export class ReposSetTeamAccessRestrictionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposSetTeamAccessRestrictionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposSetTeamAccessRestrictionsRequestBody;
}


export class ReposSetTeamAccessRestrictionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Team })
  teams?: shared.Team[];

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
