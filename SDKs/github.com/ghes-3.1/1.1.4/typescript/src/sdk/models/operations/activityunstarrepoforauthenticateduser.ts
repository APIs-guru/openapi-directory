import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityUnstarRepoForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActivityUnstarRepoForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityUnstarRepoForAuthenticatedUserPathParams;
}


export class ActivityUnstarRepoForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
