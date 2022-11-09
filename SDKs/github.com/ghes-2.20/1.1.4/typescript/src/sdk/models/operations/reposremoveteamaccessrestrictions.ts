import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposRemoveTeamAccessRestrictionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposRemoveTeamAccessRestrictionsRequestBody1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=teams" })
  teams: string[];
}


export class ReposRemoveTeamAccessRestrictionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposRemoveTeamAccessRestrictionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class ReposRemoveTeamAccessRestrictionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Team })
  teams?: shared.Team[];

  @Metadata()
  validationError?: shared.ValidationError;
}
