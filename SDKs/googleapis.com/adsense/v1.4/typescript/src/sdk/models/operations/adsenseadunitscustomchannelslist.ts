import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AdsenseAdunitsCustomchannelsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" })
  adClientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adUnitId" })
  adUnitId: string;
}


export class AdsenseAdunitsCustomchannelsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdsenseAdunitsCustomchannelsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAdunitsCustomchannelsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsenseAdunitsCustomchannelsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: AdsenseAdunitsCustomchannelsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: AdsenseAdunitsCustomchannelsListSecurityOption2;
}


export class AdsenseAdunitsCustomchannelsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AdsenseAdunitsCustomchannelsListPathParams;

  @SpeakeasyMetadata()
  queryParams: AdsenseAdunitsCustomchannelsListQueryParams;

  @SpeakeasyMetadata()
  security: AdsenseAdunitsCustomchannelsListSecurity;
}


export class AdsenseAdunitsCustomchannelsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customChannels?: shared.CustomChannels;

  @SpeakeasyMetadata()
  statusCode: number;
}
