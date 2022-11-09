import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OauthAuthorizationsRevokeGrantForApplicationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_token" })
  accessToken: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class OauthAuthorizationsRevokeGrantForApplicationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OauthAuthorizationsRevokeGrantForApplicationPathParams;
}


export class OauthAuthorizationsRevokeGrantForApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
