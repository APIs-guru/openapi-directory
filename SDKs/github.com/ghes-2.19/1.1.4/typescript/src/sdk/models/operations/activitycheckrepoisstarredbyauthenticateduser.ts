import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityCheckRepoIsStarredByAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActivityCheckRepoIsStarredByAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityCheckRepoIsStarredByAuthenticatedUserPathParams;
}


export class ActivityCheckRepoIsStarredByAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
