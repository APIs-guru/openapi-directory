import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsenseAccountsGetAdBlockingRecoveryTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class AdsenseAccountsGetAdBlockingRecoveryTagQueryParams extends SpeakeasyBase {
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


export class AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsGetAdBlockingRecoveryTagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2;
}


export class AdsenseAccountsGetAdBlockingRecoveryTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsenseAccountsGetAdBlockingRecoveryTagPathParams;

  @Metadata()
  queryParams: AdsenseAccountsGetAdBlockingRecoveryTagQueryParams;

  @Metadata()
  security: AdsenseAccountsGetAdBlockingRecoveryTagSecurity;
}


export class AdsenseAccountsGetAdBlockingRecoveryTagResponse extends SpeakeasyBase {
  @Metadata()
  adBlockingRecoveryTag?: shared.AdBlockingRecoveryTag;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
