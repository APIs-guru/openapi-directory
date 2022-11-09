import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsCreateRegistrationTokenForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsCreateRegistrationTokenForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsCreateRegistrationTokenForRepoPathParams;
}


export class ActionsCreateRegistrationTokenForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationToken?: shared.AuthenticationToken;
}
