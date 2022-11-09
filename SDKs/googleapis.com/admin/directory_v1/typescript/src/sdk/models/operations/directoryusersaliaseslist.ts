import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DirectoryUsersAliasesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userKey" })
  userKey: string;
}

export enum DirectoryUsersAliasesListEventEnum {
    Add = "add"
,    Delete = "delete"
}


export class DirectoryUsersAliasesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=event" })
  event?: DirectoryUsersAliasesListEventEnum;

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


export class DirectoryUsersAliasesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersAliasesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersAliasesListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersAliasesListSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryUsersAliasesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DirectoryUsersAliasesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DirectoryUsersAliasesListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DirectoryUsersAliasesListSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: DirectoryUsersAliasesListSecurityOption4;
}


export class DirectoryUsersAliasesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DirectoryUsersAliasesListPathParams;

  @Metadata()
  queryParams: DirectoryUsersAliasesListQueryParams;

  @Metadata()
  security: DirectoryUsersAliasesListSecurity;
}


export class DirectoryUsersAliasesListResponse extends SpeakeasyBase {
  @Metadata()
  aliases?: shared.Aliases;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
