import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsCreateRemoveTokenForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsCreateRemoveTokenForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsCreateRemoveTokenForOrgPathParams;
}


export class ActionsCreateRemoveTokenForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationToken?: shared.AuthenticationToken;
}
