import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AnalyticsDataRealtimeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dimensions" })
  dimensions?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" })
  filters?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" })
  metrics: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AnalyticsDataRealtimeGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsDataRealtimeGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsDataRealtimeGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: AnalyticsDataRealtimeGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: AnalyticsDataRealtimeGetSecurityOption2;
}


export class AnalyticsDataRealtimeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AnalyticsDataRealtimeGetQueryParams;

  @SpeakeasyMetadata()
  security: AnalyticsDataRealtimeGetSecurity;
}


export class AnalyticsDataRealtimeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  realtimeData?: shared.RealtimeData;

  @SpeakeasyMetadata()
  statusCode: number;
}
