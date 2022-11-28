import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OauthAuthorizationsRevokeAuthorizationForApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class OauthAuthorizationsRevokeAuthorizationForApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OauthAuthorizationsRevokeAuthorizationForApplicationPathParams;
}


export class OauthAuthorizationsRevokeAuthorizationForApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
