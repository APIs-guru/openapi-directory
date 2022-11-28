import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAuthorizationCodeIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Code_challenge" })
  codeChallenge?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Code_challenge_method" })
  codeChallengeMethod?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Verified_mobile" })
  verifiedMobile?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dl_flow" })
  dlFlow?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" })
  redirectUri: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=response_type" })
  responseType: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class GetAuthorizationCodeIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauthAuthorizeCode: shared.SchemeOauthAuthorizeCode;
}


export class GetAuthorizationCodeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAuthorizationCodeIdQueryParams;

  @SpeakeasyMetadata()
  security: GetAuthorizationCodeIdSecurity;
}


export class GetAuthorizationCodeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sample?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
