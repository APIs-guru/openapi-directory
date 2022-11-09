import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OauthAuthorizationsRevokeAuthorizationForApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_token" })
  accessToken: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class OauthAuthorizationsRevokeAuthorizationForApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OauthAuthorizationsRevokeAuthorizationForApplicationPathParams;
}


export class OauthAuthorizationsRevokeAuthorizationForApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
