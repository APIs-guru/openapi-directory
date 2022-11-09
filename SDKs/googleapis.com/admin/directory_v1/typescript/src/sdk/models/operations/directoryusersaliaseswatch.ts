import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DirectoryUsersAliasesWatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userKey" })
  userKey: string;
}

export enum DirectoryUsersAliasesWatchEventEnum {
    Add = "add"
,    Delete = "delete"
}


export class DirectoryUsersAliasesWatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=event" })
  event?: DirectoryUsersAliasesWatchEventEnum;

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


export class DirectoryUsersAliasesWatchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersAliasesWatchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersAliasesWatchSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersAliasesWatchSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersAliasesWatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DirectoryUsersAliasesWatchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DirectoryUsersAliasesWatchSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DirectoryUsersAliasesWatchSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DirectoryUsersAliasesWatchSecurityOption4;
}


export class DirectoryUsersAliasesWatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DirectoryUsersAliasesWatchPathParams;

  @Metadata()
  queryParams: DirectoryUsersAliasesWatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Channel;

  @Metadata()
  security: DirectoryUsersAliasesWatchSecurity;
}


export class DirectoryUsersAliasesWatchResponse extends SpeakeasyBase {
  @Metadata()
  channel?: shared.Channel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
