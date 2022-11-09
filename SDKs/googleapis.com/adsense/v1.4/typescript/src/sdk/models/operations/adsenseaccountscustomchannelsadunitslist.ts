import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsenseAccountsCustomchannelsAdunitsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=adClientId" })
  adClientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=customChannelId" })
  customChannelId: string;
}


export class AdsenseAccountsCustomchannelsAdunitsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeInactive" })
  includeInactive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdsenseAccountsCustomchannelsAdunitsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsCustomchannelsAdunitsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAccountsCustomchannelsAdunitsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdsenseAccountsCustomchannelsAdunitsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdsenseAccountsCustomchannelsAdunitsListSecurityOption2;
}


export class AdsenseAccountsCustomchannelsAdunitsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsenseAccountsCustomchannelsAdunitsListPathParams;

  @Metadata()
  queryParams: AdsenseAccountsCustomchannelsAdunitsListQueryParams;

  @Metadata()
  security: AdsenseAccountsCustomchannelsAdunitsListSecurity;
}


export class AdsenseAccountsCustomchannelsAdunitsListResponse extends SpeakeasyBase {
  @Metadata()
  adUnits?: shared.AdUnits;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
