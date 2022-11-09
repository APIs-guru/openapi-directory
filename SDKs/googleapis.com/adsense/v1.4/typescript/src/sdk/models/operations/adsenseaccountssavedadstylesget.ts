import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsenseAccountsSavedadstylesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=savedAdStyleId" })
  savedAdStyleId: string;
}


export class AdsenseAccountsSavedadstylesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdsenseAccountsSavedadstylesGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsSavedadstylesGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsSavedadstylesGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdsenseAccountsSavedadstylesGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdsenseAccountsSavedadstylesGetSecurityOption2;
}


export class AdsenseAccountsSavedadstylesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsenseAccountsSavedadstylesGetPathParams;

  @Metadata()
  queryParams: AdsenseAccountsSavedadstylesGetQueryParams;

  @Metadata()
  security: AdsenseAccountsSavedadstylesGetSecurity;
}


export class AdsenseAccountsSavedadstylesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  savedAdStyle?: shared.SavedAdStyle;

  @Metadata()
  statusCode: number;
}
