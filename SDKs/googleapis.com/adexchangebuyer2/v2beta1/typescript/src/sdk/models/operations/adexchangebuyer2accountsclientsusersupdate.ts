import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Adexchangebuyer2AccountsClientsUsersUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientAccountId" })
  clientAccountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class Adexchangebuyer2AccountsClientsUsersUpdateQueryParams extends SpeakeasyBase {
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


export class Adexchangebuyer2AccountsClientsUsersUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Adexchangebuyer2AccountsClientsUsersUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Adexchangebuyer2AccountsClientsUsersUpdatePathParams;

  @Metadata()
  queryParams: Adexchangebuyer2AccountsClientsUsersUpdateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ClientUser;

  @Metadata()
  security: Adexchangebuyer2AccountsClientsUsersUpdateSecurity;
}


export class Adexchangebuyer2AccountsClientsUsersUpdateResponse extends SpeakeasyBase {
  @Metadata()
  clientUser?: shared.ClientUser;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
