import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OauthAuthorizationsRevokeGrantForApplicationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class OauthAuthorizationsRevokeGrantForApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OauthAuthorizationsRevokeGrantForApplicationPathParams;
}


export class OauthAuthorizationsRevokeGrantForApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
