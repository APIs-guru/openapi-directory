import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OauthAuthorizationsResetAuthorizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_token" })
  accessToken: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class OauthAuthorizationsResetAuthorizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OauthAuthorizationsResetAuthorizationPathParams;
}


export class OauthAuthorizationsResetAuthorizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authorizationWithUser?: shared.AuthorizationWithUser;
}
