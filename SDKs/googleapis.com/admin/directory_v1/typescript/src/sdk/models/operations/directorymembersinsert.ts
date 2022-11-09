import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DirectoryMembersInsertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupKey" })
  groupKey: string;
}


export class DirectoryMembersInsertQueryParams extends SpeakeasyBase {
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


export class DirectoryMembersInsertSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryMembersInsertSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryMembersInsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DirectoryMembersInsertSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DirectoryMembersInsertSecurityOption2;
}


export class DirectoryMembersInsertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DirectoryMembersInsertPathParams;

  @Metadata()
  queryParams: DirectoryMembersInsertQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Member;

  @Metadata()
  security: DirectoryMembersInsertSecurity;
}


export class DirectoryMembersInsertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  member?: shared.Member;

  @Metadata()
  statusCode: number;
}
