import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsCreateRegistrationTokenForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsCreateRegistrationTokenForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsCreateRegistrationTokenForOrgPathParams;
}


export class ActionsCreateRegistrationTokenForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationToken?: shared.AuthenticationToken;
}
