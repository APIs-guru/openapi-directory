import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsenseAdunitsCustomchannelsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=adClientId" })
  adClientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=adUnitId" })
  adUnitId: string;
}


export class AdsenseAdunitsCustomchannelsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

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


export class AdsenseAdunitsCustomchannelsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAdunitsCustomchannelsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAdunitsCustomchannelsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdsenseAdunitsCustomchannelsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdsenseAdunitsCustomchannelsListSecurityOption2;
}


export class AdsenseAdunitsCustomchannelsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdsenseAdunitsCustomchannelsListPathParams;

  @Metadata()
  queryParams: AdsenseAdunitsCustomchannelsListQueryParams;

  @Metadata()
  security: AdsenseAdunitsCustomchannelsListSecurity;
}


export class AdsenseAdunitsCustomchannelsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customChannels?: shared.CustomChannels;

  @Metadata()
  statusCode: number;
}
