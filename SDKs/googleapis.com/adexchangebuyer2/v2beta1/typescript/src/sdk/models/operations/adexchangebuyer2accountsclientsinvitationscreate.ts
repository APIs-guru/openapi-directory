import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Adexchangebuyer2AccountsClientsInvitationsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientAccountId" })
  clientAccountId: string;
}


export class Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class Adexchangebuyer2AccountsClientsInvitationsCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Adexchangebuyer2AccountsClientsInvitationsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Adexchangebuyer2AccountsClientsInvitationsCreatePathParams;

  @Metadata()
  queryParams: Adexchangebuyer2AccountsClientsInvitationsCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ClientUserInvitation;

  @Metadata()
  security: Adexchangebuyer2AccountsClientsInvitationsCreateSecurity;
}


export class Adexchangebuyer2AccountsClientsInvitationsCreateResponse extends SpeakeasyBase {
  @Metadata()
  clientUserInvitation?: shared.ClientUserInvitation;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
