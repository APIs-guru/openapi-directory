import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetTeamsWithAccessToProtectedBranchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branch" })
  branch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetTeamsWithAccessToProtectedBranchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetTeamsWithAccessToProtectedBranchPathParams;
}


export class ReposGetTeamsWithAccessToProtectedBranchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Team })
  teams?: shared.Team[];
}
