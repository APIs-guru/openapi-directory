import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAuthorizationCodeIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Code_challenge" })
  codeChallenge?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Code_challenge_method" })
  codeChallengeMethod?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Verified_mobile" })
  verifiedMobile?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dl_flow" })
  dlFlow?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" })
  redirectUri: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=response_type" })
  responseType: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class GetAuthorizationCodeIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauthAuthorizeCode: shared.SchemeOauthAuthorizeCode;
}


export class GetAuthorizationCodeIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAuthorizationCodeIdQueryParams;

  @Metadata()
  security: GetAuthorizationCodeIdSecurity;
}


export class GetAuthorizationCodeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sample?: any;

  @Metadata()
  statusCode: number;
}
