import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsCreateRemoveTokenForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsCreateRemoveTokenForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsCreateRemoveTokenForRepoPathParams;
}


export class ActionsCreateRemoveTokenForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationToken?: shared.AuthenticationToken;
}
